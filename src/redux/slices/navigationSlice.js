import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isSlideOutMenuOpen: false,
    isLeftSideNavigationOpen: true,
  },
  reducers: {
    setIsSlideOutMenuOpen: (state) => {
      state.isSlideOutMenuOpen = !state.isSlideOutMenuOpen;
    },
    setIsLeftSideNavigationOpen: (state) => {
      state.isLeftSideNavigationOpen = !state.isLeftSideNavigationOpen;
    },
  },
});

export const { setIsLeftSideNavigationOpen, setIsSlideOutMenuOpen } =
  navigationSlice.actions;

export default navigationSlice.reducer;
