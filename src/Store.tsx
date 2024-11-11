import { configureStore } from "@reduxjs/toolkit";

import demoReducer from "./Slice";
export const store = configureStore({
  reducer: { demo: demoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
