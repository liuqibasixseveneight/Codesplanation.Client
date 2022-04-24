import { configureStore } from '@reduxjs/toolkit';

import dropdownReducer from './slices/dropdownSlice';
import globalThemeReducer from './slices/globalThemeSlice';
import navigationReducer from './slices/navigationSlice';

export default configureStore({
  reducer: {
    dropdown: dropdownReducer,
    globalTheme: globalThemeReducer,
    navigation: navigationReducer,
  },
});
