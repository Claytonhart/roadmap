import {
  GET_CURRENT_USERS_PROJECTS,
  SET_PROJECTS_NAME
} from "../actions/types";

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
    default:
      return state;
  }
}
