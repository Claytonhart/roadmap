import axios from "axios";

import { setAlert } from "./alert";

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
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    console.log(err);
  }
};

export const setColumnOrder = order => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";

    const body = { columnOrder: order };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: SET_COLUMN_ORDER,
      payload: order
    });

    const res = await axios.put(
      `/api/project/${projectId}/setColumnOrder`,
      body,
      config
    );
    const { data } = res;
    const { board } = data;
    const { columnOrder } = board;

    if (JSON.stringify(order) !== JSON.stringify(columnOrder)) {
      // set error instead of forcing column change
      dispatch({
        type: SET_COLUMN_ORDER,
        payload: columnOrder
      });
    }
  } catch (err) {
    console.log(err);
    console.log("set column order error");
  }
};

export const setTaskInSameColumn = taskOrder => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";

    const body = { column: taskOrder };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: SET_TASK_IN_SAME_COLUMN,
      payload: taskOrder
    });

    const res = await axios.put(
      `/api/project/${projectId}/setTaskInSameColumn`,
      body,
      config
    );

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const setTaskInNewColumn = (
  startColumn,
  finishColumn
) => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";

    const body = { startColumn, finishColumn };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: SET_TASK_IN_NEW_COLUMN,
      payload: {
        startColumn,
        finishColumn
      }
    });

    const res = await axios.put(
      `/api/project/${projectId}/setTaskInNewColumn`,
      body,
      config
    );

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const setColumnTitle = (title, column) => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";
    const body = { title, column };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: SET_COLUMN_TITLE,
      payload: {
        title,
        column
      }
    });

    const res = await axios.put(
      `/api/project/${projectId}/setColumnTitle`,
      body,
      config
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateExistingTask = (task, content) => async dispatch => {
  try {
    const projectId = "5db53af211de1c625467b454";
    const body = { task, content };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await dispatch({
      type: UPDATE_EXISTING_TASK,
      payload: {
        task,
        content
      }
    });

    const res = await axios.put(
      `/api/project/${projectId}/setTaskTitle`,
      body,
      config
    );

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }

  // return {
  //   type: UPDATE_EXISTING_TASK,
  //   payload: {
  //     task,
  //     content
  //   }
  // };
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
