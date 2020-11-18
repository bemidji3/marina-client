import {combineReducers} from "redux";

import boatsReducer from "./boats/boatsReducer";

const appReducer = combineReducers({ boatsReducer, });

export default appReducer;
