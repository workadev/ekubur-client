import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
    setLogout: (state) => {
      state.currentUser = {}
    },
  }
})

export const {
  setUser,
  setLogout
} = userSlice.actions;

export default userSlice.reducer;