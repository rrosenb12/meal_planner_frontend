import { combineReducers } from "redux";
import userReducer from "./userReducer";
import generalReducer from "./generalReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  calendar: generalReducer,
});

export default rootReducer;
