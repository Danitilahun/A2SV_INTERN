import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface User {
//   id: string;
//   username: string;
//   email: string;
// }

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginCredentials>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, SignupCredentials>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Destructure the generated hooks for usage
export const { useLoginMutation, useSignupMutation } = authApi;
