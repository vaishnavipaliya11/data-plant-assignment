import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./helpers/getData";
import { postData } from "./helpers/postData";
import { FormInputTypes } from "../../types";
import { editSchedule } from "./helpers/editData";
import { deleteSchedule } from "./helpers/deleteData";

interface scheduleInitialStateTypes {
  data: FormInputTypes[];
  searchQuery: string;
  dataLoading: boolean;
  isPopOverOpen: boolean;
}

const initialState: scheduleInitialStateTypes = {
  data: [],
  searchQuery: "",
  dataLoading: false,
  isPopOverOpen: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setPopOver: state => {
      state.isPopOverOpen = !state.isPopOverOpen;
    },
    setSearchQuery: (state, action) =>{
      state.searchQuery = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, state => {
        state.dataLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, state => {
        state.dataLoading = false;
      });
    builder
      .addCase(postData.pending, state => {
        state.dataLoading = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(postData.rejected, state => {
        state.dataLoading = false;
      });
    builder
      .addCase(editSchedule.pending, state => {
        state.dataLoading = true;
      })
      .addCase(editSchedule.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = state.data.map(data =>
          data.id === action.payload.id ? action.payload : data
        );
      })
      .addCase(editSchedule.rejected, state => {
        state.dataLoading = false;
      });
    builder
      .addCase(deleteSchedule.pending, state => {
        state.dataLoading = true;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = state.data.filter(data => data.id !== action.payload.id);
      })
      .addCase(deleteSchedule.rejected, state => {
        state.dataLoading = false;
      });
  },
});

export const { setPopOver, setSearchQuery } = scheduleSlice.actions;

export default scheduleSlice.reducer;
