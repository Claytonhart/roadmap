import { combineReducers } from "redux";
import board from "./board";
import alert from "./alert";
import project from "./project";
import auth from "./auth";
import projects from "./projects";

export default combineReducers({
  board,
  alert,
  project,
  auth,
  projects
});
