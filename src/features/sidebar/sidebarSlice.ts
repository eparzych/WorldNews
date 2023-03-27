import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
