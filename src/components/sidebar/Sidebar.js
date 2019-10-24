import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #151b26;
  color: #fff;
  padding: 10px;
`;

const NavContainer = styled.div`
  margin-bottom: 10px;
`;

const NavTitle = styled.div`
  margin-bottom: 10px;
`;

const NavLinks = styled.div`
  margin-bottom: 10px;
`;

const NavContent = styled.div`
  margin-bottom: 10px;
  flex-grow: 1;
`;

const NavFooter = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <NavContainer>
        <NavTitle>Roadmap</NavTitle>
        <NavLinks>Links</NavLinks>
      </NavContainer>
      <NavContent>Content</NavContent>
      <NavFooter>Invite To Roadmap!</NavFooter>
    </Container>
  );
};

export default Sidebar;
