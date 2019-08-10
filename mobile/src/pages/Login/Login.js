import React from "react";
import { Platform } from "react-native";
import {
  Container,
  Logo,
  Input,
  ButtonSubmit,
  TextButtonSubmit
} from "./styles";

import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <Container behavior="padding" enabled={Platform.OS === "ios"}>
      <Logo source={logo} />
      <Input
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <ButtonSubmit>
        <TextButtonSubmit>Entrar</TextButtonSubmit>
      </ButtonSubmit>
    </Container>
  );
}
