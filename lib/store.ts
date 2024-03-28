import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./api/job/jobSlice";
import { authApi } from "./api/auth/authSlice";
import jobReducer from "./features/job/jobSlice";
import authSlice from "./features/auth/authSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    auth: authSlice,
    [jobApi.reducerPath]: jobApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware, authApi.middleware),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector;
