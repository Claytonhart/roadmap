import React, { useState } from "react";
import styled from "styled-components/macro";
import NewTaskContainer from "./task/NewTaskContainer";

const Container = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: lightgrey;
  }
`;

const AddNewTaskButton = ({ column }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Container onClick={() => setIsActive(true)}>+ Add a task</Container>
      {isActive && (
        <NewTaskContainer column={column} setIsActive={setIsActive} />
      )}
    </>
  );
};

export default AddNewTaskButton;
