import React from "react";
import styled from "styled-components/macro";
import WorkspaceItem from "./workspaceItem/WorkspaceItem";

const Container = styled.div`
  width: 244px;
  min-width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: ${props => props.theme.primary.grey};
  color: #fff;
  padding: 10px;
`;

const NavContainer = styled.div`
  margin-bottom: 10px;
`;

const NavTitle = styled.div`
  /* text-align: center; */
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
  font-size: 24px;
  font-weight: 700;
  /* border-bottom: 2px solid ${props => props.theme.primary.red}; */
  margin-bottom: 50px;
`;

const NavLinks = styled.div`
  margin-bottom: 10px;
  min-height: 100px;
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
`;

const NavContent = styled.div`
  margin-bottom: 10px;
  flex-grow: 1;
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
`;

const NavContentHeader = styled.h3`
  color: ${props => props.theme.primary.white};
  margin-bottom: 10px;
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
      <NavContent>
        <NavContentHeader>Your Workspaces</NavContentHeader>
        <WorkspaceItem
          title="Workspace 1"
          people={[
            {
              color: "salmon",
              initials: "CH"
            },
            {
              color: "green",
              initials: "JK"
            },
            {
              color: "orange",
              initials: "HI"
            }
          ]}
          projects={[
            {
              color: "blue",
              name: "Project 1"
            },
            {
              color: "red",
              name: "Project 2"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 2"
          people={[
            {
              color: "orange",
              initials: "DA"
            },
            {
              color: "salmon",
              initials: "WE"
            },
            {
              color: "lightblue",
              initials: "OM"
            }
          ]}
          projects={[
            {
              color: "pink",
              name: "Not Project 3"
            },
            {
              color: "orange",
              name: "Project 5"
            }
          ]}
        />
      </NavContent>
      <NavFooter>Invite To Roadmap!</NavFooter>
    </Container>
  );
};

export default Sidebar;
