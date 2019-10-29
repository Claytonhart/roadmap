import React from "react";
import styled from "styled-components/macro";

import { connect } from "react-redux";

import DropdownContainer from "../dropdownContainer/DropdownContainer";
import { logout } from "../../actions/auth";

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

const Profile = styled.div``;

const ProfileName = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: transparent;
  border: none;
  outline: none;

  &:focus + div {
    display: block;
  }
`;

const ProfileItem = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #fff;
  text-align: right;

  &:hover {
    background-color: #f6f8f9;
  }
`;

const TopBar = ({ project, user, logout }) => {
  const { name } = project;
  let userName;

  if (user) {
    userName = user.name;
  }

  return (
    <TopBarContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <div></div>
      <Profile>
        <ProfileName>{userName}</ProfileName>
        <DropdownContainer top={"80px"} right={"10px"}>
          <ProfileItem>All Projects</ProfileItem>
          <ProfileItem onClick={logout}>Log out</ProfileItem>
        </DropdownContainer>
      </Profile>
    </TopBarContainer>
  );
};

const mapStateToProps = state => ({
  project: state.project,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(TopBar);
