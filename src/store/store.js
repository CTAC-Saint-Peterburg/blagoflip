import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./balance/balanceSlice";
import availableflipsSlice from "./availableflips/availableflipsSlice";
import profileSlice from "./profile/profileSlice";
import gameSlice from "./game/gameSlice";

export default configureStore({
  reducer: {
    balance: balanceSlice,
    availableflips: availableflipsSlice,
    profile: profileSlice,
    game: gameSlice,
  },
});
