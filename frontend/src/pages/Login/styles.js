import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  input {
    margin: 20px 0 10px;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: ${colors.grey};
    background: ${colors.light};
    &::placeholder {
      color: ${colors.placeholder};
    }
  }

  button {
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: ${colors.primary};
    color: white;
  }
`;
