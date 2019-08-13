import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  flex: 1;
  background-color: white;
  padding: 15px 20px;
  border-radius: 0 0 5px 5px;
`;

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  img {
    border-radius: 5px 5px 0 0;
    max-width: 100%;
  }
`;

export const Username = styled.h6`
  font-size: 1rem;
  color: ${colors.regular};
`;

export const Bio = styled.p`
  line-height: 20px;
  margin-top: 40px;
  color: ${colors.placeholder};
`;

export const ContentButton = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const ButtonIcon = styled.img``;

export const Button = styled.button`
  border: none;
  background: none;
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  :hover {
    ${ButtonIcon} {
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }
`;
