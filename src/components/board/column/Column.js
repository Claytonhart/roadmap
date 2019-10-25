import React from "react";
import styled from "styled-components/macro";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task/Task";
import ColumnTitle from "./ColumnTitle";
import AddNewTaskButton from "./AddNewTaskButton";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 5px;
  width: 220px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;

const ColumnTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px;
`;

const InnerList = React.memo(props => {
  return props.tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
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
                  <InnerList tasks={tasks} />
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
