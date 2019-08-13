import React, { useState } from 'react';
import {
  Container,
  Footer,
  CardList,
  Card,
  Username,
  Bio,
  Button,
  ContentButton,
  ButtonIcon
} from './styles';
import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <Container>
      <img src={logo} alt="Tindev" />
      <CardList>
        <Card>
          <img src="https://avatars2.githubusercontent.com/u/20244584?v=4" alt="" />
          <Footer>
            <Username>leticia</Username>
            <Bio>blablal</Bio>
          </Footer>

          <ContentButton>
            <Button type="button">
              <ButtonIcon src={dislike} alt="Dislike" />
            </Button>
            <Button type="button">
              <ButtonIcon src={like} alt="Like" />
            </Button>
          </ContentButton>
        </Card>
      </CardList>
    </Container>
  );
}
