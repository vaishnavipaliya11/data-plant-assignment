import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteSchedule = createAsyncThunk(
  "schedule/delete",
  async (id: string|number | undefined) => {
    try {
      const response = await axios.delete(
        `https://65a02d427310aa1f8144bb38.mockapi.io/api/v1/all/${id}`
      );
      console.log(response, "response");
      if (response.status === 200) {
        return response.data;
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
