import React from "react";
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

const WorkspaceItem = ({ title, people, projects }) => {
  // also going to need to map over people, display circles with initials
  return (
    <Container>
      <WorkspaceItemTitleContainer>
        <WorkspaceItemTitle>{title}</WorkspaceItemTitle>
        <WorkspaceItemIcon onClick={() => console.log("delete workspace")}>
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

export default WorkspaceItem;
