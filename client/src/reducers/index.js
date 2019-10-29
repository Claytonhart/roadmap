import { combineReducers } from "redux";
import board from "./board";
import alert from "./alert";
import project from "./project";
import auth from "./auth";

export default combineReducers({
  board,
  alert,
  project,
  auth
});
