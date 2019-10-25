import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createNewTask } from "../../../../actions/board";
import styled from "styled-components/macro";
import onEscOrClickOutside from "../../../../utils/onEscOrClickOutside";

const NewTask = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const NewTaskForm = styled.form``;

const NewTaskContainer = ({ column, setIsActive, createNewTask }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const element = document.getElementById("new-task-container");
    const cleanup = onEscOrClickOutside(setIsActive, element);

    return () => {
      cleanup();
    };
  }, [setIsActive]);

  const onFormSubmit = e => {
    e.preventDefault();
    // create new task
    createNewTask(column, inputValue);
    setIsActive(false);
  };

  return (
    <NewTask id="new-task-container">
      <NewTaskForm onSubmit={onFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoFocus
        />
      </NewTaskForm>
    </NewTask>
  );
};

export default connect(
  null,
  { createNewTask }
)(NewTaskContainer);
