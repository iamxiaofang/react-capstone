import { combineReducers } from "redux";

import users from "./users";
import questions from "./questions";
import loading from './loading'
import login from "./login";
import home from "./home";

export default combineReducers({
  users,
  questions,
  loading,
  login,
  home
});
