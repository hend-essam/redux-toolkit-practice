import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import toggleCounterSlice from "./toggleCounter";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    toggleCounter: toggleCounterSlice.reducer,
  },
});

export default store;
