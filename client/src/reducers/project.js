import { SET_PROJECT_DATA, CREATE_NEW_PROJECT } from "../actions/types";

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
    case CREATE_NEW_PROJECT: {
      const id = payload;
      debugger;
      return {
        ...state,
        projectId: id
      };
    }
    default:
      return state;
  }
}
