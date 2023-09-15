import { combineReducers } from "@reduxjs/toolkit";
import { favouritesReducer } from "./favourites.slice";

export const rootReducer = combineReducers({
  favourites: favouritesReducer,
});
