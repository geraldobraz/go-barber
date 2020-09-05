import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <h1>Login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Enter</Button>

        <a href="forgot">Forgot password</a>
      </form>
      <a href="forgot">
        <FiLogIn />
        Create a new account
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
