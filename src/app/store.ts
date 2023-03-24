import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebar/sidebarSlice";
import contentSlice from "../features/content/contentSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    content: contentSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
