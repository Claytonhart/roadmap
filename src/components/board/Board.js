import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import {
  getBoard,
  setColumnOrder,
  setTaskInSameColumn,
  setTaskInNewColumn
} from "../../actions/board";

import Column from "./column/Column";
import NewColumn from "./newColumn/NewColumn";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: #f6f8f9;
  align-items: flex-start;
  overflow-x: auto;
`;

const InnerListContainer = styled.div`
  display: flex;
`;

const InnerList = props => {
  const { column, taskMap, index } = props;

  const tasks = column.taskIds.map(taskId => taskMap[taskId]);
  return <Column column={column} tasks={tasks} index={index} />;
};

const Board = ({
  boardState,
  setColumnOrder,
  setTaskInSameColumn,
  setTaskInNewColumn
}) => {
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    // do nothing and return draggable to original position if no destination
    if (!destination) {
      return;
    }

    // if dropped in original column, and index, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // updating column draggable component order
    if (type === "column") {
      const newColumnOrder = Array.from(boardState.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);
      return;
    }

    const start = boardState.columns[source.droppableId];
    const finish = boardState.columns[destination.droppableId];

    // Moving within one list
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      setTaskInSameColumn(newColumn);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    setTaskInNewColumn(newStart, newFinish);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {provided => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            <InnerListContainer>
              {boardState.columnOrder.map((columnId, index) => {
                const column = boardState.columns[columnId];
                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={boardState.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </InnerListContainer>
            <NewColumn />
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  boardState: state.board
});

export default connect(
  mapStateToProps,
  {
    getBoard,
    setColumnOrder,
    setTaskInSameColumn,
    setTaskInNewColumn
  }
)(Board);
