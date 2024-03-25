import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/job/jobSlice";
import jobReducer from "./features/job/jobSlice";

export default configureStore({
  reducer: {
    jobs: jobReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
