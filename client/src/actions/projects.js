import axios from "axios";
import { GET_CURRENT_USERS_PROJECTS, SET_PROJECTS_NAME } from "./types";

export const getCurrentUsersProjects = () => async dispatch => {
  try {
    const res = await axios.get(`/api/project`);
    console.log(res);
    console.log(res.data);

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
