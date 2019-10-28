import { SET_PROJECT_DATA } from "../actions/types";

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
    default:
      return state;
  }
}
