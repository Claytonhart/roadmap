import axios from "axios";

import {
  GET_BOARD,
  SET_COLUMN_ORDER,
  SET_TASK_IN_SAME_COLUMN,
  SET_TASK_IN_NEW_COLUMN,
  SET_COLUMN_TITLE,
  UPDATE_EXISTING_TASK,
  CREATE_NEW_TASK,
  DELETE_TASK,
  DELETE_COLUMN,
  CREATE_NEW_COLUMN,
  GET_BOARD_BY_ID
} from "./types";

import initialData from "../initial-data";

export const getBoard = () => {
  return {
    type: GET_BOARD,
    payload: initialData
  };
};

export const getBoardById = () => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";

    const res = await axios.get(`/api/project/${projectId}`);
    const { data } = res;
    const { board, date, name, id } = data;

    console.log(res.data);

    dispatch({
      type: GET_BOARD_BY_ID,
      payload: {
        board,
        date,
        name,
        id
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const setColumnOrder = order => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";

    const body = { columnOrder: order };
    // debugger;
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: SET_COLUMN_ORDER,
      payload: order
    });

    debugger;

    const res = await axios.put(
      `/api/project/${projectId}/setColumnOrder`,
      body,
      config
    );
    const { data } = res;
    const { board } = data;
    const { columnOrder } = board;

    if (JSON.stringify(order) !== JSON.stringify(columnOrder)) {
      dispatch({
        type: SET_COLUMN_ORDER,
        payload: columnOrder
      });
    }
  } catch (err) {}
  // return {
  //   type: SET_COLUMN_ORDER,
  //   payload: order
  // };
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

export const deleteTask = (column, task) => {
  return {
    type: DELETE_TASK,
    payload: {
      column,
      task
    }
  };
};

export const deleteColumn = column => {
  return {
    type: DELETE_COLUMN,
    payload: column
  };
};

export const createNewColumn = title => {
  return {
    type: CREATE_NEW_COLUMN,
    payload: title
  };
};
