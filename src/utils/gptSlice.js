import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { toggleGPT } = gptSlice.actions;

export default gptSlice.reducer;
