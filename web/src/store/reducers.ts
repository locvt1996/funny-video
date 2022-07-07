import { combineReducers } from "redux";
import authen from "./authen";
import video from "./video";

const rootReducer = combineReducers({
  authen,
  video,
});

export default rootReducer;
