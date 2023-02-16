import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    contacts: [
      {
        name: "John",
        lastMessage: "last message",
        id: "13234",
        messages: [
          { text: "test1!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
      {
        name: "mike",
        lastMessage: "last message",
        id: "13314",
        messages: [
          { text: "test2!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
      {
        name: "Nick",
        lastMessage: "last message",
        id: "1314",
        messages: [
          { text: "test3!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
      {
        name: "Pepa",
        lastMessage: "last message",
        id: "132314",
        messages: [
          { text: "test4!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
      {
        name: "Mr Roll",
        lastMessage: "last message",
        id: "114",
        messages: [
          { text: "test5!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
      {
        name: "Literaly me",
        lastMessage: "last message",
        id: "132",
        messages: [
          { text: "test6!", type: "mymsg", id: 24322346 },
          { text: "Oh hi!", type: "inmsg", id: 243211249 },
        ],
      },
    ],
    activeMessages: {
      info: { name: "BlagoflipBot", status: "Online" },
      msg: [
        { text: "Hello friend!", type: "inmsg", id: 243211249 },
        {
          text: "You can find another users with help of search:)",
          type: "inmsg",
          id: 2432,
        },
      ],
    },
  },
  reducers: {
    //TO DO проблемы с добавлением сообщений в contacts
    loadActiveMessages: (state, actions) => {
      const data = actions.payload;
      state.activeMessages = {
        info: { name: data.name, status: "Online" },
        msg: data.messages,
      };
    },
    addMessage: (state, action) => {
      state.activeMessages.msg.push(action.payload);
    },
    addContacts: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    removeContacts: (state, actions) => {
      state.contacts = state.contacts.filter((x) => x.id !== actions.payload);
    },
  },
});

export const { addMessage, addContacts, removeContacts, loadActiveMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
