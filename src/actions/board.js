import {
  GET_BOARD,
  SET_COLUMN_ORDER,
  SET_TASK_IN_SAME_COLUMN,
  SET_TASK_IN_NEW_COLUMN,
  SET_COLUMN_TITLE,
  UPDATE_EXISTING_TASK,
  CREATE_NEW_TASK
} from "./types";

import initialData from "../initial-data";

export const getBoard = () => {
  return {
    type: GET_BOARD,
    payload: initialData
  };
};

export const setColumnOrder = order => {
  return {
    type: SET_COLUMN_ORDER,
    payload: order
  };
};

export const setTaskInSameColumn = taskOrder => {
  return {
    type: SET_TASK_IN_SAME_COLUMN,
    payload: taskOrder
  };
};

export const setTaskInNewColumn = (startColumn, finishColumn) => {
  return {
    type: SET_TASK_IN_NEW_COLUMN,
    payload: {
      startColumn,
      finishColumn
    }
  };
};

export const setColumnTitle = (title, column) => {
  return {
    type: SET_COLUMN_TITLE,
    payload: {
      title,
      column
    }
  };
};

export const updateExistingTask = (task, content) => {
  return {
    type: UPDATE_EXISTING_TASK,
    payload: {
      task,
      content
    }
  };
};

export const createNewTask = (column, content) => {
  return {
    type: CREATE_NEW_TASK,
    payload: {
      column,
      content
    }
  };
};
