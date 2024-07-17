import { configureStore } from "@reduxjs/toolkit";
import projectOverViewSlice from "./projectOverViewSlice";

const store = configureStore({
  reducer: {
    note: projectOverViewSlice,
  },
});

export default store;
