import { createSlice } from "@reduxjs/toolkit";

interface DemoState {
  name: string;
}

const initialState: DemoState = {
  name: "Redux Toolkit",
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    changeName(state, action) {
      console.log(action);
      console.log(action.payload);
      state.name = action.payload;
    },
  },
});

export const { changeName } = demoSlice.actions;
export default demoSlice.reducer;
