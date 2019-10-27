import { combineReducers } from "redux";
import board from "./board";
import alert from "./alert";

export default combineReducers({
  board,
  alert
});
