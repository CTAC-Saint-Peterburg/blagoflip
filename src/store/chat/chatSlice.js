import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    contacts: [
      { name: "John", lastMessage: "last message", id: "13234" },
      { name: "mike", lastMessage: "last message", id: "13314" },
      { name: "Nick", lastMessage: "last message", id: "1314" },
      { name: "Pepa", lastMessage: "last message", id: "132314" },
      { name: "Mr Roll", lastMessage: "last message", id: "114" },
      { name: "Literaly me", lastMessage: "last message", id: "132" },
    ],
    messages: [
      { text: "hello!", type: "mymsg", id: 24322346 },
      { text: "Oh hi!", type: "inmsg", id: 243211249 },
      { text: "how do you do?!", type: "inmsg", id: 2432 },
      { text: "hm?", type: "mymsg", id: 234 },
      { text: "good thx", type: "inmsg", id: 2343248 },
      { text: "sounds good", type: "mymsg", id: 54863 },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addContacts: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    removeContacts: (state, actions) => {
      state.contacts = state.contacts.filter((x) => x.id !== actions.payload);
    },
  },
});

export const { addMessage, addContacts, removeContacts } = chatSlice.actions;
export default chatSlice.reducer;
