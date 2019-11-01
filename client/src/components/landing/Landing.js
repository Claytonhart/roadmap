import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { logout, login } from "../../actions/auth";
import landingIcon from "../../assets/images/SEO_SVG.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary.grey};
`;

const LandingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 20px 40px;
  background-color: #fff;
  color: ${props => props.theme.primary.grey};

  a {
    font-size: 16px;
    padding: 8px;
    color: inherit;

    &:hover {
      color: inherit;
    }
  }
`;

const LandingLogo = styled.h1`
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
  cursor: pointer;
`;

const LandingAuth = styled.div``;

const LoadingContainer = styled.div`
  padding: 8px;
`;

const LandingProjects = styled(Link)``;

const Login = styled(Link)``;

const Register = styled(Link)``;

const LandingBody = styled.div`
  flex: 1;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const LandingDesc = styled.div`
  display: flex;
  max-width: 1000px;
  width: 75%;
`;

const LandingLeft = styled.div`
  padding: 40px 20px;
  flex-basis: 50%;
`;

const LandingHero = styled.h4`
  color: inherit;
  font-size: 30px;
  padding-top: 80px;
  margin-bottom: 180px;

  span {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.primary.red};
  }
`;

const LandingLinks = styled.div`
  font-size: 16px;
  align-self: flex-start;
`;

const LandingLinksLogin = styled.button`
  border: 1px solid #fff;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.primary.grey};
  }
`;

const LandingLinksCredentials = styled.div`
  display: flex;
  margin-top: 10px;

  p {
    margin: 0;
  }
`;

const LandingLinksCredentialsRight = styled.div`
  margin-left: 15px;
`;

const LandingRight = styled.div`
  flex-basis: 50%;
`;

const Landing = ({ login, logout, auth, user, history }) => {
  const demoLogin = async () => {
    if (!auth.isAuthenticated) {
      await login("demo@roadmap.com", "roadmap");
      history.push("/project");
    } else {
      await logout();
      await login("demo@roadmap.com", "roadmap");
      history.push("/project");
    }
  };

  return (
    <Container>
      <LandingHeader>
        <LandingLogo>Roadmap</LandingLogo>
        {auth.loading ? (
          <LoadingContainer></LoadingContainer>
        ) : !user ? (
          <LandingAuth>
            <Login to="/login">Login</Login>
            <Register to="/register">Register</Register>
          </LandingAuth>
        ) : (
          <LandingProjects to="/project">Your Projects</LandingProjects>
        )}
      </LandingHeader>
      <LandingBody>
        <LandingDesc>
          <LandingLeft>
            <LandingHero>
              <span>Roadmap</span> is a product management app that allows teams
              to work together, better.
            </LandingHero>
            <LandingLinks>
              <LandingLinksLogin onClick={demoLogin}>
                Login with demo credentials
              </LandingLinksLogin>
              <LandingLinksCredentials>
                <div>
                  <p>User:</p>
                  <p>Password:</p>
                </div>
                <LandingLinksCredentialsRight>
                  <p>demo@roadmap.com</p>
                  <p>roadmap</p>
                </LandingLinksCredentialsRight>
              </LandingLinksCredentials>
            </LandingLinks>
          </LandingLeft>
          <LandingRight>
            <img src={landingIcon} alt="seo-svg" />
          </LandingRight>
        </LandingDesc>
      </LandingBody>
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { login, logout }
)(Landing);
