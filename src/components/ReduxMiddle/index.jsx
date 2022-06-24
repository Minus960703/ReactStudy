import { combineReducers } from "redux";
import counter from "./modules/counter";
import posts from "./modules/posts";

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
