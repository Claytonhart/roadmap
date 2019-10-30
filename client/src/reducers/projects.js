import { GET_CURRENT_USERS_PROJECTS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USERS_PROJECTS: {
      return [...payload];
    }
    default:
      return state;
  }
}
