import React from "react";

import {
  Item,
  ItemContent,
  ItemIcon,
  ItemName,
  ItemEditIcon,
  ItemLink,
  ItemButton
} from "./styles";

const ProjectItem = ({ projectId, project, onClick }) => {
  return projectId ? (
    <Item>
      <ItemLink to={`/project/${projectId}`}>
        <ItemContent>
          <ItemIcon color={project.color}></ItemIcon>
          <ItemName>{project.name}</ItemName>
        </ItemContent>
        <ItemEditIcon>
          <i className="fas fa-long-arrow-alt-right"></i>
        </ItemEditIcon>
      </ItemLink>
    </Item>
  ) : (
    <Item onClick={onClick}>
      <ItemButton>
        <ItemContent>
          <ItemIcon color={project.color}></ItemIcon>
          <ItemName>{project.name}</ItemName>
        </ItemContent>
        <ItemEditIcon>
          <i className="fas fa-long-arrow-alt-right"></i>
        </ItemEditIcon>
      </ItemButton>
    </Item>
  );
};

export default ProjectItem;
