import {
  GET_CURRENT_USERS_PROJECTS,
  SET_PROJECTS_NAME,
  DELETE_PROJECT,
  CREATE_NEW_PROJECT,
  ADD_USER_TO_PROJECT,
  ADD_USER_ALREADY_EXISTS
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USERS_PROJECTS: {
      return [...payload];
    }
    case SET_PROJECTS_NAME: {
      const { index, name } = payload;
      // let array = JSON.parse(JSON.stringify(state));
      // array[index].name = name;
      // return [...array];
      return state.map((project, i) => {
        if (i !== index) {
          return project;
        }
        return {
          ...project,
          name
        };
      });
    }
    case CREATE_NEW_PROJECT: {
      return [...state, payload];
    }
    case DELETE_PROJECT: {
      const id = payload;
      return state.filter(project => project._id !== id);
    }
    case ADD_USER_TO_PROJECT: {
      const { user, index } = payload;

      return state.map((project, i) => {
        if (i !== index) {
          return project;
        }
        return {
          ...project,
          users: [...project.users, user]
        };
      });
    }
    case ADD_USER_ALREADY_EXISTS: {
      return state;
    }
    default:
      return state;
  }
}
