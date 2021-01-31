import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import dashboardHero from "./dashboardReducer";

/*
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});*/
export default configureStore({
  reducer: combineReducers({
    dashboardHero: dashboardHero,
 
  }),
  //middleware: customizedMiddleware,
});
