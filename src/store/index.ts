import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { SelectedUserReducer } from "./reducers/SelectedUser";

export const rootReducer = combineReducers({
  selectedUser: SelectedUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
