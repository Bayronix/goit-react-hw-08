import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "/auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error.response);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logIn = createAsyncThunk(
  "/auth/logIn",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logOut", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    console.error("Logout error:", error.response);
    const errorMessage = error.response?.data?.message || error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      console.error("Refresh user error:", error.response);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMessage);
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

// {
//   "user": {
//     "name": "vladyslav",
//     "email": "vladyslavhalytskyi248@gmail.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFiNWZhOGM0OTVlZDZlMjVmMzEzOWYiLCJpYXQiOjE3MjI1MDcxNzZ9.mPQLUZqVj36VQBE-g-HMRk8uM6l4fkqlBIZOaL4sqaU"
// }
