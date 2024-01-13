import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteSchedule = createAsyncThunk(
  "schedule/delete",
  async (id: string) => {
    try {
      const response = await axios.delete(
        `https://621d070d806a09850a500b05.mockapi.io/api/wishlist/${id}`
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
