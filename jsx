// Import required modules
import React from 'react';
import styled from 'styled-components';

// Styled components for your React component
const Body = styled.div`
  background: #ff0000;
  color: #ffffff;
  font-family: 'Playfair Display', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

const Header = styled.header`
  background-color: #cc0000;
  padding: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
`;

const H1 = styled.h1`
  margin: 0;
  color: #ffffff;
`;

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50px;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: #cc0000;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  text-align: center;
  width: 350px;
  margin-top: 100px;
`;

const H2 = styled.h2`
  color: #cc0000;
`;

const LoginForm = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #cc0000;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0000;
  }
`;

const ForgotPasswordLink = styled.a`
  color: #cc0000;
  text-decoration: none;
  display: block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const CreatePasswordLink = styled.a`
  color: #cc0000;
  text-decoration: none;
  display: block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupLink = styled.a`
  color: #cc0000;
  text-decoration: none;
  display: block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  background-color: #cc0000;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  margin-top: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-color: #cc0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0000;
  }
`;

// React component using the styled components
const LoginComponent = () => {
  return (
    <Body>
      <Header>
        <H1>MedVault</H1>
      </Header>

      <Nav>
        <NavLink href="homepage.html" target="_blank">Home</NavLink>
        <NavLink href="login.html" target="_blank">Login</NavLink>
        <NavLink href="register.html" target="_blank">Register</NavLink>
        <NavLink href="doctorsdashboard.html" target="_blank">Doctor's Dashboard</NavLink>
      </Nav>

      <LoginContainer>
        <H2>Login to MedVault</H2>
        <LoginForm action="#" method="post">
          <Input type="text" name="username" placeholder="Username" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button type="submit">Login</Button>
        </LoginForm>
        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        <CreatePasswordLink href="#">Create New Password</CreatePasswordLink>
        <SignupLink href="register.html">Don't have an account? Sign up here.</SignupLink>
      </LoginContainer>

      <Footer>
        &copy; 2023 MedVault. All rights reserved.
      </Footer>

      <ScrollToTopButton onClick={scrollToTop}>Scroll to Top</ScrollToTopButton>
    </Body>
  );
};

// Scroll to top function
const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
