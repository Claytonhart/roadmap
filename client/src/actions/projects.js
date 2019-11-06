import axios from 'axios';
import {
  GET_CURRENT_USERS_PROJECTS,
  SET_PROJECTS_NAME,
  DELETE_PROJECT,
  ADD_USER_TO_PROJECT,
  ADD_USER_ALREADY_EXISTS
} from './types';

import { setAlert } from './alert';

export const getCurrentUsersProjects = () => async dispatch => {
  try {
    const res = await axios.get(`/api/project`);

    dispatch({
      type: GET_CURRENT_USERS_PROJECTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const setProjectsName = (index, id, name) => async dispatch => {
  try {
    const body = { name };

    await axios.put(`/api/project/${id}/setProjectName`, body);

    dispatch({
      type: SET_PROJECTS_NAME,
      payload: {
        index,
        name
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = id => async dispatch => {
  try {
    await axios.delete(`/api/project/${id}`);

    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const addUserToProject = (id, user, index) => async dispatch => {
  try {
    const body = { user };
    await axios.put(`/api/project/${id}/user`, body);

    dispatch({
      type: ADD_USER_TO_PROJECT,
      payload: {
        user,
        index
      }
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'red')));
    }

    dispatch({
      type: ADD_USER_ALREADY_EXISTS
    });
  }
};
