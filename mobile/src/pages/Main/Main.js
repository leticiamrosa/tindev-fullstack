import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Logo,
  CardContainer,
  Card,
  CardAvatar,
  CardFooter,
  Username,
  Description,
  ButtonContainer,
  Button,
  ButtonIcon,
  WithoutUsers
} from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

export default function Main({ navigation }) {
  const loggedUserId = navigation.getParam("user");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: loggedUserId
        }
      });
      setUsers(response.data);
    }

    loadUsers();
  }, [loggedUserId]);

  async function handleLike() {
    const [user, ...rest] = users;
    await api.post(`/devs/${user._id}/likes`, null, {
      headers: { user: loggedUserId }
    });
    setUsers(rest);
  }

  async function handleDislike() {
    const [user, ...rest] = users;
    await api.post(`/devs/${user._id}/dislikes`, null, {
      headers: { user: loggedUserId }
    });

    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Logo source={logo} />
      </TouchableOpacity>

      <CardContainer>
        {users.length === 0 ? (
          <WithoutUsers>Acabou 😩 </WithoutUsers>
        ) : (
          users.map((user, i) => (
            <Card zIndex={users.length - i} key={user._id}>
              <CardAvatar
                source={{
                  uri: user.avatar
                }}
              />
              <CardFooter>
                <Username>{user.name}</Username>
                <Description numberOfLine={3}>{user.bio}</Description>
              </CardFooter>
            </Card>
          ))
        )}
      </CardContainer>

      <ButtonContainer>
        <Button onPress={handleDislike}>
          <ButtonIcon source={dislike} />
        </Button>
        <Button onPress={handleLike}>
          <ButtonIcon source={like} />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
