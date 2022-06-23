import {combineReducers, configureStore } from "@reduxjs/toolkit";
import Userinfo from '../Slice/createSlice'

const store=combineReducers({
     user:Userinfo.reducer  
})
 
const Store=configureStore({
    reducer:store
})
export default Store