import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components/macro";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;
  top: 25%;
`;

const RegisterLogo = styled.h3`
  font-size: 64px;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
`;

const RegisterForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const RegisterInput = styled.input`
  padding: 12px;
  margin: 8px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const RegisterButton = styled.input`
  background-color: ${props => props.theme.primary.blue};
  color: #fff;
  padding: 12px;
  margin: 8px;
  cursor: pointer;
`;

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "red");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/project" />;
  }

  return (
    <Container>
      <RegisterLogo>Roadmap</RegisterLogo>
      <p>Create Your Account</p>
      <RegisterForm onSubmit={e => onSubmit(e)}>
        <RegisterInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />

        <RegisterInput
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />

        <RegisterInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />

        <RegisterInput
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={e => onChange(e)}
        />

        <RegisterButton type="submit" value="Register" />
      </RegisterForm>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
