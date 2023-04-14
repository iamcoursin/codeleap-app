import { combineReducers } from "redux";
import userReducer from "./reducers/user/reducer";
import feedReducer from "./reducers/feed/reducer"; 

const rootReducer = combineReducers({
  userReducer, feedReducer
});

export default rootReducer;
