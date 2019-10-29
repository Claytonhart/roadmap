import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createNewTask } from "../../../../actions/board";

import { NewTask, NewTaskForm } from "./styles";

import onEscOrClickOutside from "../../../../utils/onEscOrClickOutside";

const NewTaskContainer = ({ column, setIsActive, createNewTask }) => {
  let { projectId } = useParams();
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
    createNewTask(projectId, column, inputValue);
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
