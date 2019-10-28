import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import TaskEditButton from "./TaskEditButton";
import TaskModal from "./TaskModal";
import { Container, Content } from "./styles";

const Task = ({ task, index, column }) => {
  const [modalShow, setModalShow] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          onClick={showModal}
        >
          <Content>{task.content}</Content>
          <TaskEditButton task={task} column={column} />
          {modalShow && (
            <TaskModal
              isVisible={modalShow}
              title={task.content}
              task={task}
              onClose={() => setModalShow(false)}
            />
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
