import React, { useState, useEffect } from 'react';
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
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
      console.log(response.data);
    })();
  }, [match.params.id]);

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <Container>
      <img className="image-logo" src={logo} alt="Tindev" />
      <CardList>
        {console.log(users)}
        {console.log(match.params.id)}
        {users &&
          users.map(user =>
            user._id !== match.params.id ? (
              <Card>
                <img src={user.avatar} alt={user.name} />
                <Footer>
                  <Username>{user.name}</Username>
                  <Bio>{user.bio}</Bio>
                </Footer>

                <ContentButton>
                  <Button type="button" onClick={handleDislike}>
                    <ButtonIcon src={dislike} alt="Dislike" />
                  </Button>
                  <Button type="button" onClick={handleLike}>
                    <ButtonIcon src={like} alt="Like" />
                  </Button>
                </ContentButton>
              </Card>
            ) : null
          )}
      </CardList>
    </Container>
  );
}
