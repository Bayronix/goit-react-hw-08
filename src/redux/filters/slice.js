import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setQuery } = filtersSlice.actions;

export default filtersSlice.reducer;
