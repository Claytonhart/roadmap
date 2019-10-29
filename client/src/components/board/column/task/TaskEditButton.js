import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";

import DropdownContainer from "../../../dropdownContainer/DropdownContainer";
import { deleteTask } from "../../../../actions/board";

import { IconContainer } from "./styles";

const TaskEditContainer = styled.div`
  position: relative;
  &:hover > span {
    opacity: 1;
  }
`;

const TaskEditItem = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-align: right;
  display: block;
  border: none;
  background-color: transparent;
  color: inherit;
  white-space: nowrap;

  &:hover {
    background-color: #f6f8f9;
    text-decoration: none;
    color: inherit;
  }
`;

const TaskEditButton = ({ task, column, deleteTask }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  let { projectId } = useParams();

  const stopPropagation = e => {
    e.stopPropagation();
    setShowDropdown(true);
  };

  const deleteCurrentTask = () => {
    deleteTask(projectId, column, task);
  };

  return (
    <TaskEditContainer>
      <IconContainer onClick={stopPropagation}>
        <i className="fas fa-pen"></i>
      </IconContainer>
      {showDropdown && (
        <DropdownContainer
          callback={setShowDropdown}
          show={showDropdown}
          left={"20px"}
          top={"0px"}
        >
          <TaskEditItem onClick={deleteCurrentTask}>Delete task</TaskEditItem>
        </DropdownContainer>
      )}
    </TaskEditContainer>
  );
};

export default connect(
  null,
  { deleteTask }
)(TaskEditButton);
