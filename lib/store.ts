import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./api/job/jobSlice";
import { authApi } from "./api/auth/authSlice";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import jobReducer from "./features/job/jobSlice";

export type RootState = ReturnType<typeof store.getState>;

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware, authApi.middleware),
});

// Extract the dispatch function from the store for convenience
const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Create a custom useDispatch hook with typed dispatch
const useDispatch = () => useAppDispatch<AppDispatch>();

// Export the Redux store, dispatch, useSelector, and useDispatch for use in components
export { store, dispatch, useSelector, useDispatch };
