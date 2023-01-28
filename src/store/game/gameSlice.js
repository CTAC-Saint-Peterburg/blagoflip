import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: { data: { visibility: false } },
  reducers: {
    change: (state) => {
      state.data.visibility = !state.data.visibility;
    },
  },
});
export const { change } = gameSlice.actions;
export default gameSlice.reducer;
