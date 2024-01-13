import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EditSchedulePayload } from "../../../types";

export const editSchedule = createAsyncThunk(
  "schedule/edit",
  async ({ id, payload }: EditSchedulePayload) => {
    console.log(payload, "editSchedule");
    const url = `https://65a02d427310aa1f8144bb38.mockapi.io/api/v1/all/${id}`;
    try {
      const response = await axios({
        method: "PUT",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          "Failed to update cart item. Status Code: ",
          response.status
        );
        return null;
      }
    } catch (error) {
      console.error("Error while updating cart item: ", error);
      return null;
    }
  }
);
