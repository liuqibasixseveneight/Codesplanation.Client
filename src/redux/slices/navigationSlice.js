import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isNavigationOpen: false,
  },
  reducers: {
    setIsNavigationOpen: (state) => {
      state.isNavigationOpen = !state.isNavigationOpen;
    },
  },
});

export const { setIsNavigationOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
