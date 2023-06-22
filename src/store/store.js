import { configureStore } from "@reduxjs/toolkit";
import loginDataReducer from "./loginDataSlice";
import telReducer from "./telSlise";
import messagesReducer from "./messagesSlice";

export const store = configureStore({
  reducer: {
    loginData: loginDataReducer,
    tel: telReducer,
    messages: messagesReducer,
  },
});
