import React, { useState } from "react";

import TaskEditModal from "./TaskEditModal";
import { IconContainer } from "./styles";

const TaskEditButton = ({ task }) => {
  const [modalShow, setModalShow] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <>
      <IconContainer onClick={showModal}>
        <i className="fas fa-pen"></i>
      </IconContainer>
      <TaskEditModal
        isVisible={modalShow}
        title={task.content}
        task={task}
        onClose={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskEditButton;
