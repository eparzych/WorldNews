import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ContentView {
    row,
    square,
}

export interface ContentViewState {
  contentView: ContentView;
}

const initialState: ContentViewState = {
  contentView: ContentView.square,
}

export const contentViewSlice = createSlice({
  name: 'contentView',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ContentView>) => {
        state.contentView = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setView } = contentViewSlice.actions;

export default contentViewSlice.reducer;
