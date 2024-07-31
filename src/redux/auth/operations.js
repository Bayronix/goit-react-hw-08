import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
export const userLogin = createAsyncThunk(
  "/user/signup",
  async (_, thunkApi) => {
    try {
      const response = await axios.post("/contacts");
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// {
//   "user": {
//     "name": "Vlad123",
//     "email": "cheggibeats.2708@gmail.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhNGQ1Y2M0OTVlZDZlMjVmMzEyMDgiLCJpYXQiOjE3MjI0MzY5NTZ9.tpNgIkY0FlMyHQ4OJWmGGXFRQDsWfvqhqSU2qfYnTYM"
// }
