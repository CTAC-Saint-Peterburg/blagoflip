import { createSlice } from "@reduxjs/toolkit";
export const availableflipsSlice = createSlice({
  name: "availableflips",
  initialState: {
    data: [
      { id: 11, name: "stas", value: 50 },
      { id: 18, name: "kek", value: 50 },
      { id: 28, name: "kok", value: 10 },
      { id: 33, name: "heh", value: 100 },
      { id: 66, name: "mem", value: 500 },
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
