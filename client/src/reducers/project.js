import {
  SET_PROJECT_DATA,
  CREATE_NEW_PROJECT,
  CLEAR_PROJECT,
  SET_PROJECT_NAME
} from "../actions/types";

const initialState = {
  name: null,
  date: null,
  id: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECT_DATA: {
      return {
        ...state,
        ...payload
      };
    }
    case CLEAR_PROJECT: {
      return {
        ...initialState
      };
    }
    case CREATE_NEW_PROJECT: {
      const id = payload;
      return {
        ...state,
        projectId: id
      };
    }
    case SET_PROJECT_NAME: {
      const name = payload;
      return {
        ...state,
        name
      };
    }
    default:
      return state;
  }
}
