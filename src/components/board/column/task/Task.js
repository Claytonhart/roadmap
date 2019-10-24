import React from "react";
import { Draggable } from "react-beautiful-dnd";

import TaskEditButton from "./TaskEditButton";
import { Container, Content } from "./styles";

const Task = props => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Content>{props.task.content}</Content>
          <TaskEditButton task={props.task} />
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
