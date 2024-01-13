import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormInputTypes } from "../../../types";

export const postData = createAsyncThunk(
  "schedule/post",
  async (payload: FormInputTypes) => {
    console.log("called postdata", payload);
    try {
      const response = await axios.post(
        `https://65a02d427310aa1f8144bb38.mockapi.io/api/v1/all
      `,
        payload
      );
      if (response.status === 201) {
        console.log(response, "postdata");
        const scheduleData = response?.data;
        return scheduleData;
      } else {
        console.error(
          "Failed to retrieve orders. Status Code: ",
          response.status
        );
        return null;
      }
    } catch (error) {
      console.error("Error while fetching orders: ", error);
      return null;
    }
  }
);
