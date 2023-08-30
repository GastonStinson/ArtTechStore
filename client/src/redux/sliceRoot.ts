import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
  name: "rootReducer",
  initialState: {
    algo: "",
  },
  reducers: {
    myFunction(state, action) {
      state.algo = action.payload;
    },
  },
});

export const { myFunction } = rootSlice.actions;

export default rootSlice.reducer;