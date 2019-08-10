import styled from "styled-components";
import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Image``;

export const Input = styled.TextInput`
  height: 46px;
  align-self: stretch;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background-color: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButtonSubmit = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export default { Container };
