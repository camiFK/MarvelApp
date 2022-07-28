import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { sortingReducer } from "./sortingReducer";

export const reducers = combineReducers({
    rootReducer,
    sortingReducer,
})
