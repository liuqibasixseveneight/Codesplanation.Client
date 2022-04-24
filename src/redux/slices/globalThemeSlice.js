import { createSlice } from '@reduxjs/toolkit';

import { getInitialTheme } from '../../utils';

export const globalThemeSlice = createSlice({
  name: 'globalTheme',
  initialState: {
    isGlobalThemeDark: getInitialTheme(),
  },
  reducers: {
    setIsGlobalThemeDark: (state) => {
      state.isGlobalThemeDark = !state.isGlobalThemeDark;
      localStorage.setItem('isDarkTheme', state.isGlobalThemeDark);
    },
  },
});

export const { setIsGlobalThemeDark } = globalThemeSlice.actions;

export default globalThemeSlice.reducer;
