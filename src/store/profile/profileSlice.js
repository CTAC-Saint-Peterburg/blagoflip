import { createSlice } from "@reduxjs/toolkit";
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: { name: "Unnamed", id: "1", winrate: 33 },
    history: [1, 2, 3, 4],
  },
  reducers: {},
});
export default profileSlice.reducer;
