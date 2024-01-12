import axios from "axios";
import { getDataUrl } from "../../../constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("/schedule/all", async () => {
  try {
    const data = await axios(getDataUrl);

    return data.data;
  } catch (error) {
    console.log(error);
  }
});
