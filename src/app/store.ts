import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "../features/schedules/scheduleSlice"
export const store = configureStore({
  reducer: {
    schedule:scheduleReducer
  },
});
