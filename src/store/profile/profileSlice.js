import { createSlice } from "@reduxjs/toolkit";
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: { name: "Unnamed", id: "1", winrate: 33, signInStatus: false },
    history: [
      { id: 9, opponent: "kek", bet: 100 },
      { id: 13, opponent: "GigaHru", bet: 50 },
      { id: 88, opponent: "Sam", bet: 10 },
      { id: 132, opponent: "Rodjer", bet: 500 },
    ],
    alert: { visibility: false, text: "undefined" },
  },
  reducers: {
    setSignInStatus: (state) => {
      state.data.signInStatus = !state.data.signInStatus;
    },
    addToHistory: (state, action) => {
      state.history.push(action.payload);
    },
    setVisibility: (state, action) => {
      state.alert.visibility = action.payload;
    },
    setText: (state, action) => {
      state.alert.text = action.payload;
    },
    setNewName: (state, action) => {
      state.data.name = action.payload;
    },
  },
});
export const {
  addToHistory,
  setVisibility,
  setText,
  setNewName,
  setSignInStatus,
} = profileSlice.actions;
export default profileSlice.reducer;
