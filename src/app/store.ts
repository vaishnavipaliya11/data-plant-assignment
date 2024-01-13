import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "../features/schedules/scheduleSlice"
import { Action } from "redux";
export const store = configureStore({
  reducer: {
    schedule:scheduleReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;