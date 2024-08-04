import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.name = action.payload;
    },
    setQueryNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setQuery, setQueryNumber } = filtersSlice.actions;

export default filtersSlice.reducer;
