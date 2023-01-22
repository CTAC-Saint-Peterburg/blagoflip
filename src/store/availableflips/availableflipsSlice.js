import { createSlice } from "@reduxjs/toolkit";
export const availableflipsSlice = createSlice({
  name: "availableflips",
  initialState: {
    data: [
      { name: "stas", value: 50 },
      { name: "kek", value: 50 },
      { name: "kok", value: 10 },
      { name: "heh", value: 100 },
      { name: "mem", value: 500 },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { add } = availableflipsSlice.actions;
export default availableflipsSlice.reducer;
