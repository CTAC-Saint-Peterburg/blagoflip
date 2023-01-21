import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./balance/balanceSlice";

export default configureStore({
  reducer: {
    balance: balanceSlice,
  },
});
