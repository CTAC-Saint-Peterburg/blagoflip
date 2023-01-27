import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./balance/balanceSlice";
import availableflipsSlice from "./availableflips/availableflipsSlice";
import profileSlice from "./profile/profileSlice";

export default configureStore({
  reducer: {
    balance: balanceSlice,
    availableflips: availableflipsSlice,
    profile: profileSlice,
  },
});
