import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./helpers/getData";

interface scheduleInitialStateTypes {
  data: [];
  dataLoading: boolean;
  isPopOverOpen: boolean;
}

const initialState: scheduleInitialStateTypes = {
  data: [],
  dataLoading: false,
  isPopOverOpen: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setPopOver: (state) => {
      state.isPopOverOpen = !state.isPopOverOpen;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.dataLoading = false;
      });
  },
});

export const { setPopOver } = scheduleSlice.actions;

export default scheduleSlice.reducer;
