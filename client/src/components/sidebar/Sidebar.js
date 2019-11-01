import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { getCurrentUsersProjects } from "../../actions/projects";
import WorkspaceItem from "./workspaceItem/WorkspaceItem";
import CreateProjectModal from "./workspaceItem/createProject/CreateProjectModal";

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
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NavTitle = styled.h3`
  display: block;
  color: inherit;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 50px;

  &:hover {
    color: inherit;
    text-decoration-color: ${props => props.theme.primary.red};
  }
`;

const NavLinks = styled.div`
  margin-bottom: 10px;
  min-height: 100px;
`;

const NavContent = styled.div`
  margin-bottom: 10px;
  flex-grow: 1;
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
  overflow-y: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const NavContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
  padding: 8px;

  transition: all 0.2s;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

const NavContentHeaderLink = styled(Link)`
  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    text-decoration-color: #fff;
  }
`;

const NavContentHeader = styled.h3`
  color: ${props => props.theme.primary.white};
`;

const NavContentHeaderIcon = styled.span`
  opacity: 0;
  cursor: pointer;
`;

const NavFooter = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ projects, getCurrentUsersProjects }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  useEffect(() => {
    getCurrentUsersProjects().then(() => setIsLoading(false));
  }, [getCurrentUsersProjects]);

  const createProject = () => {
    // setShowDropdown(false);
    setShowCreateProjectModal(true);
  };

  return (
    <Container>
      <NavContainer>
        <NavTitle as={Link} to="/">
          Roadmap
        </NavTitle>
        <NavLinks>Links</NavLinks>
      </NavContainer>
      <NavContentHeaderContainer>
        <NavContentHeaderLink to="/project">
          <NavContentHeader>Your Projects</NavContentHeader>
        </NavContentHeaderLink>
        <NavContentHeaderIcon onClick={createProject}>
          <i className="fas fa-plus"></i>
        </NavContentHeaderIcon>
        {showCreateProjectModal && (
          <CreateProjectModal
            isVisible={showCreateProjectModal}
            title={"Create a new project"}
            onClose={() => setShowCreateProjectModal(false)}
            setShouldUpdate={() => {}}
          />
        )}
      </NavContentHeaderContainer>
      {!isLoading ? (
        <NavContent>
          {projects.map((project, index) => {
            const { _id: id, name } = project;
            return (
              <WorkspaceItem index={index} key={id} title={name} id={id} />
            );
          })}
          {/* <WorkspaceItem
          title="Project 1"
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
        /> */}
        </NavContent>
      ) : (
        <NavContent></NavContent>
      )}
      <NavFooter>Invite To Roadmap!</NavFooter>
    </Container>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getCurrentUsersProjects }
)(Sidebar);
