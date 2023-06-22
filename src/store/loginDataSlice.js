import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  token: "",
  login: false,
};
const loginDataSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setWid(state, action) {
      state.wid = action.payload;
    },
  },
});

export const { setId, setToken, setWid } = loginDataSlice.actions;

export default loginDataSlice.reducer;
