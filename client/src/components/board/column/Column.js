import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { Container, TaskList, ColumnTasksContainer } from "./styles";

import Task from "./task/Task";
import ColumnTitle from "./ColumnTitle";
import AddNewTaskButton from "./newTask/AddNewTaskButton";

const InnerList = React.memo(props => {
  return props.tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} column={props.column} />
  ));
});

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <ColumnTitle provided={provided} column={column} />
          <ColumnTasksContainer>
            <AddNewTaskButton column={column} />
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={tasks} column={column} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </ColumnTasksContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
