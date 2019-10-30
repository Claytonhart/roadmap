import axios from "axios";
import { GET_CURRENT_USERS_PROJECTS } from "./types";

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
