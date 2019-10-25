import React, { useState } from "react";
import NewTaskContainer from "./NewTaskContainer";
import { NewTaskButtonContainer } from "./styles";

const AddNewTaskButton = ({ column }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NewTaskButtonContainer onClick={() => setIsActive(true)}>
        + Add a task
      </NewTaskButtonContainer>
      {isActive && (
        <NewTaskContainer column={column} setIsActive={setIsActive} />
      )}
    </>
  );
};

export default AddNewTaskButton;
