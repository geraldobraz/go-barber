import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <h1>Login</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>

        <a href="forgot">Forgot password</a>
      </form>
      <a href="forgot">
        <FiLogIn>Create a new account</FiLogIn>
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
