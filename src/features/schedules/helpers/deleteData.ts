import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const deleteSchedule = createAsyncThunk(
  "schedule/delete",
  async (id: string|number | undefined) => {
    try {
      const response = await axios.delete(
        `https://65a02d427310aa1f8144bb38.mockapi.io/api/v1/all/${id}`
      );
      console.log(response, "response");
      if (response.status === 200) {
        toast.success("Deleted schedule");
        return response.data;
      } else {
        toast.error("Unable to Delete schedule.");

        console.error(
          "Failed to retrieve orders. Status Code: ",
          response.status
        );
        return null;
      }
    } catch (error) {
      toast.error("Unable to Delete schedule.");
      console.error("Error while fetching orders: ", error);
      return null;
    }
  }
);
