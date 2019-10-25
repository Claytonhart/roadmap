import React from "react";
import { connect } from "react-redux";

import { deleteTask } from "../../../../actions/board";

import { IconContainer } from "./styles";

const TaskEditButton = ({ task, column, deleteTask }) => {
  const showDropdown = e => {
    e.stopPropagation();
    console.log("clicked");
    deleteTask(column, task);
  };
  return (
    <IconContainer onClick={showDropdown}>
      <i className="fas fa-pen"></i>
    </IconContainer>
  );
};

export default connect(
  null,
  { deleteTask }
)(TaskEditButton);
