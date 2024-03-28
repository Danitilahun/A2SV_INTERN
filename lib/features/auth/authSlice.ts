import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
    clearUser(state) {
      state.user = null;
    },
    clearEmail(state) {
      if (state.user) {
        state.user.email = null;
      }
    },
  },
});

export const { setUser, setEmail, clearUser, clearEmail } = authSlice.actions;
export default authSlice.reducer;
