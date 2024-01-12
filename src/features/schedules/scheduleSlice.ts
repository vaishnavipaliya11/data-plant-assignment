import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./helpers/getData";

interface scheduleInitialStateTypes {
  data: [];
  dataLoading: boolean;
}

const initialState: scheduleInitialStateTypes = {
  data: [],
  dataLoading: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
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

// Action creators are generated for each case reducer function
export const {} = scheduleSlice.actions;

export default scheduleSlice.reducer;
