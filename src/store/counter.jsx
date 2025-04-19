import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increase, decrease, toggleCounter } = counterSlice.actions;
export default counterSlice;
