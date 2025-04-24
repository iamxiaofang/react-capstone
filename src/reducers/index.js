import { combineReducers } from "redux";

import users from "./users";
import questions from "./questions";
import loading from './loading'
import login from "./login";

export default combineReducers({
  users,
  questions,
  loading,
  login,
});
