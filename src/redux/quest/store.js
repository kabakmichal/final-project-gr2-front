import { configureStore } from "@reduxjs/toolkit";
import { questReducer } from "./questSlice";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    quest: questReducer,
  },
  enhancer,
});
