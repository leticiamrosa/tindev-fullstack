import styled from "styled-components";
// import { View, Image, SafeAreaView } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin-top: 40px;
`;

export const CardContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500;
`;

export const Card = styled.View`
  position: absolute;
  border: 1px solid #ddd;
  border-radius: 8;
  margin: 30px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${props => props.zIndex};
`;

export const CardAvatar = styled.Image`
  height: 300px;
  flex: 1;
`;

export const CardFooter = styled.View`
  background-color: #fff;
  padding: 15px 20px;
`;

export const Username = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 8;
  line-height: 18;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 50;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  /* elavation: 2; */
`;

export const WithoutUsers = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  align-self: center;
  justify-content: center;
`;

export const ButtonIcon = styled.Image``;
