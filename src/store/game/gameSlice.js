import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: { data: { visibility: false, receivedData: undefined } },
  reducers: {
    change: (state) => {
      state.data.visibility = !state.data.visibility;
    },
    sendData: (state, action) => {
      state.data.receivedData = action.payload;
    },
  },
});
export const { change, sendData } = gameSlice.actions;
export default gameSlice.reducer;
