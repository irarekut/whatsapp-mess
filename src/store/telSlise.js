import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tel: "",
};
const telSlice = createSlice({
  name: "tel",
  initialState,
  reducers: {
    setTel(state, action) {
      state.tel = action.payload;
    },
  },
});

export const { setTel } = telSlice.actions;

export default telSlice.reducer;
