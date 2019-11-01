import React, { useState } from "react";
import styled from "styled-components/macro";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DropdownContainer from "../dropdownContainer/DropdownContainer";
import { logout } from "../../actions/auth";
import TopBarName from "./TopBarName";

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

const Profile = styled.div``;

const ProfileName = styled.button`
  text-transform: capitalize;
  color: ${props => props.theme.primary.grey};
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
  background-color: transparent;
  border: none;
  outline: none;

  &:focus {
    background-color: #f6f8f9;
  }
`;

const ProfileItem = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  background-color: #fff;
  text-align: right;
  display: block;
  border: none;
  background-color: transparent;
  width: 100%;
  color: inherit;

  &:hover {
    background-color: #f6f8f9;
    text-decoration: none;
    color: inherit;
  }
`;

const TopBar = ({ project, user, logout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { name } = project;
  let userName;

  if (user) {
    userName = user.name;
  }

  return (
    <TopBarContainer>
      {name && <TopBarName name={name} />}
      <div></div>
      <Profile>
        <ProfileName onClick={() => setShowDropdown(true)}>
          {userName}
        </ProfileName>
        {showDropdown && (
          <DropdownContainer
            callback={setShowDropdown}
            show={showDropdown}
            top={"80px"}
            right={"10px"}
          >
            <ProfileItem as={Link} to="/project">
              All Projects
            </ProfileItem>
            <ProfileItem onClick={logout}>Log out</ProfileItem>
          </DropdownContainer>
        )}
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
