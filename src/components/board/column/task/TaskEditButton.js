import React from "react";

import { IconContainer } from "./styles";

const TaskEditButton = () => {
  const showDropdown = e => {
    e.stopPropagation();
    console.log("clicked");
  };
  return (
    <IconContainer onClick={showDropdown}>
      <i className="fas fa-pen"></i>
    </IconContainer>
  );
};

export default TaskEditButton;
