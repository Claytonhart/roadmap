import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createNewProject } from "../../../actions/project";
import ProjectItem from "./projectItem/ProjectItem";

import {
  Container,
  WorkspaceItemTitleContainer,
  WorkspaceItemTitle,
  WorkspaceItemPeople,
  WorkspaceItemProjects,
  WorkspaceItemIcon,
  WorkspaceItemPerson
} from "./styles";

const WorkspaceItem = ({
  title,
  people,
  projects,
  createNewProject,
  history
}) => {
  const createProject = async () => {
    const id = await createNewProject("New Test Board");
    history.push(`/project/${id}`);
  };

  return (
    <Container>
      <WorkspaceItemTitleContainer>
        <WorkspaceItemTitle>{title}</WorkspaceItemTitle>
        <WorkspaceItemIcon onClick={createProject}>
          <i className="fas fa-ellipsis-h"></i>
        </WorkspaceItemIcon>
      </WorkspaceItemTitleContainer>
      <WorkspaceItemPeople>
        {people.map((person, i) => (
          <WorkspaceItemPerson
            style={{ backgroundColor: person.color }}
            key={i}
          >
            {person.initials}
          </WorkspaceItemPerson>
        ))}
      </WorkspaceItemPeople>
      <WorkspaceItemProjects>
        {projects.map((project, i) => (
          // project.name, .link, .color, .abilitytodelete
          <ProjectItem key={i} project={project} />
        ))}
      </WorkspaceItemProjects>
    </Container>
  );
};

export default withRouter(
  connect(
    null,
    { createNewProject }
  )(WorkspaceItem)
);
