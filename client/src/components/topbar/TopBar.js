import React from "react";
import styled from "styled-components/macro";

import { connect } from "react-redux";

const TopBarContainer = styled.div`
  height: 100px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 3px 0px rgba(21, 27, 38, 0.15);
  z-index: 10;
`;

const ProjectTitle = styled.h3`
  margin-left: 15px;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f6f8f9;
    cursor: pointer;
  }
`;

const TopBar = ({ project, user }) => {
  const { name } = project;
  let userName;

  if (user) {
    userName = user.name;
  }

  return (
    <TopBarContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <div></div>
      <div>{userName}</div>
    </TopBarContainer>
  );
};

const mapStateToProps = state => ({
  project: state.project,
  user: state.auth.user
});

export default connect(mapStateToProps)(TopBar);
