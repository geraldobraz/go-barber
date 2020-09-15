import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Do your Login</Title>
      <Button>Login</Button>
    </Container>
  );
};

export default SignIn;
