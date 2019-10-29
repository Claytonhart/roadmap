import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { login } from "../../actions/auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;
  top: 25%;
`;

const LoginLogo = styled.h3`
  font-size: 64px;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
`;

const LoginForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  padding: 12px;
  margin: 8px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const LoginButton = styled.input`
  background-color: ${props => props.theme.primary.blue};
  color: #fff;
  padding: 12px;
  margin: 8px;
  cursor: pointer;
`;

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/project" />;
  }

  return (
    <Container>
      <LoginLogo>Roadmap</LoginLogo>
      <p>Sign Into Your Account</p>
      <LoginForm onSubmit={e => onSubmit(e)}>
        <LoginInput
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />

        <LoginInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          minLength="6"
        />

        <LoginButton type="submit" value="Login" />
      </LoginForm>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
