import React from "react";

import { Item, ItemContent, ItemIcon, ItemName, ItemEditIcon } from "./styles";

const ProjectItem = ({ project }) => {
  return (
    <Item>
      <ItemContent>
        <ItemIcon color={project.color}></ItemIcon>
        <ItemName>{project.name}</ItemName>
      </ItemContent>
      <ItemEditIcon onClick={() => console.log("edit project details")}>
        <i className="fas fa-ellipsis-h"></i>
      </ItemEditIcon>
    </Item>
  );
};

export default ProjectItem;
