import { createSlice } from "@reduxjs/toolkit";
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: { name: "Unnamed", id: "1", winrate: 33 },
    history: [
      { id: 9, opponent: "kek", bet: 100 },
      { id: 13, opponent: "GigaHru", bet: 50 },
      { id: 18, opponent: "Sam", bet: 10 },
      { id: 132, opponent: "Rodjer", bet: 500 },
    ],
  },
  reducers: {},
});
export default profileSlice.reducer;
