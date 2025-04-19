import { createSlice } from "@reduxjs/toolkit";

const toggleCounterSlice = createSlice({
  name: "toggleCounter",
  initialState: { showCounter: true },
  reducers: {
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { toggleCounter } = toggleCounterSlice.actions;
export default toggleCounterSlice;
