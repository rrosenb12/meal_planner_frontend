import { combineReducers } from "redux";
import userReducer from "./userReducer";
import calendarReducer from "./calendarReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  calendar: calendarReducer,
});

export default rootReducer;
