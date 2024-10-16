import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogListState {
  value: string;
}

const initialState: BlogListState = {
  value: 'foryou',
}

export const blogListSlice = createSlice({
  name: "bloglist",
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<string>) => {
      const data = action.payload.replace(/\s+/g, '').toLowerCase();
      state.value = data;
    }
  }
})

export const { updateList } = blogListSlice.actions;

export default blogListSlice.reducer;
