import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Platform } from "react-native";
import {
  Container,
  Logo,
  Input,
  ButtonSubmit,
  TextButtonSubmit
} from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.png";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("Main", { user });
      }
    });
  }, [navigation]);

  async function handleLogin() {
    const response = await api.post("/devs", { username: user });
    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    navigation.navigate("Main", { user: _id });
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === "ios"}>
      <Logo source={logo} />
      <Input
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={user}
        onChangeText={setUser}
      />
      <ButtonSubmit>
        <TextButtonSubmit onPress={() => handleLogin()}>
          Entrar
        </TextButtonSubmit>
      </ButtonSubmit>
    </Container>
  );
}
