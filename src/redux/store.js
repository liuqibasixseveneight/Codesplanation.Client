import { configureStore } from "@reduxjs/toolkit";

import globalThemeReducer from "./slices/globalThemeSlice";
import navigationReducer from "./slices/navigationSlice";

export default configureStore({
  reducer: {
    globalTheme: globalThemeReducer,
    navigation: navigationReducer,
  },
});
