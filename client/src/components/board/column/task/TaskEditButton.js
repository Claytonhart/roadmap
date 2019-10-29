import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { deleteTask } from "../../../../actions/board";

import { IconContainer } from "./styles";

const TaskEditButton = ({ task, column, deleteTask }) => {
  let { projectId } = useParams();

  const showDropdown = e => {
    e.stopPropagation();
    console.log("clicked");
    deleteTask(projectId, column, task);
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
