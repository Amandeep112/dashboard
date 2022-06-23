 import { combineReducers } from "redux";
 import userReducer from './Reducer';

 const rootreducer=combineReducers({
     user:userReducer
 })
  export default rootreducer 