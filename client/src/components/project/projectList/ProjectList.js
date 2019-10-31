import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { getCurrentUsersProjects } from "../../../actions/projects";
import ProjectListItem from "./ProjectListItem";
import CreateProjectModal from "../../sidebar/workspaceItem/createProject/CreateProjectModal";

const Container = styled.div`
  width: 750px;
  max-width: 750px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
`;

const ProjectListHeader = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ProjectListDesc = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const ProjectListName = styled.h4`
  text-decoration: underline;
`;

const ProjectListUsers = styled.p`
  font-size: 14px;
  margin: 0;
  margin-right: 20px;
`;

const ProjectCreateButton = styled.button`
  border: none;
  color: #fff;
  background-color: ${props => props.theme.primary.grey};
  padding: 12px 24px;
  align-self: flex-end;
  margin-top: 30px;
  cursor: pointer;
`;

const ProjectListUsersAndSettings = styled.div`
  display: flex;
`;

const ProjectList = ({ getCurrentUsersProjects, projects }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  useEffect(() => {
    getCurrentUsersProjects();
    setIsLoading(false);
  }, [getCurrentUsersProjects]);

  return (
    <Container>
      <ProjectListHeader>Projects</ProjectListHeader>
      <ProjectListDesc>
        <ProjectListName>Name</ProjectListName>
        <ProjectListUsersAndSettings>
          <ProjectListUsers>Users</ProjectListUsers>
          <div>Settings</div>
        </ProjectListUsersAndSettings>
      </ProjectListDesc>
      {!isLoading && (
        <ul>
          {projects.map((project, index) => (
            <ProjectListItem
              index={index}
              key={project._id}
              project={project}
            />
          ))}
        </ul>
      )}
      <ProjectCreateButton onClick={() => setShowCreateProjectModal(true)}>
        Create Project
      </ProjectCreateButton>
      {showCreateProjectModal && (
        <CreateProjectModal
          isVisible={showCreateProjectModal}
          title={"Create a new project"}
          onClose={() => setShowCreateProjectModal(false)}
        />
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getCurrentUsersProjects }
)(ProjectList);
