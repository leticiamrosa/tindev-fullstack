import React from "react";
import {
  Container,
  Logo,
  CardContainer,
  Card,
  CardAvatar,
  CardFooter,
  Username,
  Description
} from "./styles";
import { View } from "react-native";

import logo from "../../assets/logo.png";

export default function Main() {
  return (
    <Container>
      <Logo source={logo} />

      <CardContainer>
        <Card>
          <CardAvatar
            source={{
              uri: "https://avatars2.githubusercontent.com/u/20244584?v=4"
            }}
          />
          <CardFooter>
            <Username>Letícia Monteiro</Username>
            <Description numberOfLine={3}>
              Front End Developer ux/ui Designer.
            </Description>
          </CardFooter>
        </Card>
      </CardContainer>

      <View />
    </Container>
  );
}
