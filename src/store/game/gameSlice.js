import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    data: { visibility: false, receivedData: undefined, wheelSpin: false },
  },
  reducers: {
    change: (state) => {
      state.data.visibility = !state.data.visibility;
    },
    sendData: (state, action) => {
      state.data.receivedData = action.payload;
    },
    setWheelSpin: (state) => {
      state.data.wheelSpin = !state.data.wheelSpin;
    },
  },
});
export const { change, sendData, setWheelSpin } = gameSlice.actions;
export default gameSlice.reducer;
