import { combineReducers } from "redux";
import user from "./modules/user";
import song from "./modules/song";

export default combineReducers({
  user,
  song,
});
