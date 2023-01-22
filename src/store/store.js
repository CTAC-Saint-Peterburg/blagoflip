import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./balance/balanceSlice";
import availableflipsSlice from "./availableflips/availableflipsSlice";

export default configureStore({
  reducer: {
    balance: balanceSlice,
    availableflips: availableflipsSlice,
  },
});
