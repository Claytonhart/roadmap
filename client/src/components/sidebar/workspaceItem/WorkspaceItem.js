import React from "react";
import { connect } from "react-redux";

import { getBoardById } from "../../../actions/board";
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
  getBoardById
}) => {
  const createProject = async () => {
    const id = await createNewProject("New Test Board");
    getBoardById(id);
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

export default connect(
  null,
  { createNewProject, getBoardById }
)(WorkspaceItem);
