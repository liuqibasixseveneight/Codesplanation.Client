import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    isDropdownOpen: false,
  },
  reducers: {
    setIsDropdownOpen: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { setIsDropdownOpen } = dropdownSlice.actions;

export default dropdownSlice.reducer;
