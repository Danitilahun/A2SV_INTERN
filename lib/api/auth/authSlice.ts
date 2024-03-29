import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, SignupCredentials>({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
      }),
    }),

    verifyEmail: builder.mutation<any, EmailVerificationData>({
      query: (verificationData) => ({
        url: "/verify-email",
        method: "POST",
        body: verificationData,
      }),
    }),
  }),
});

// Destructure the generated hooks for usage
export const { useLoginMutation, useSignupMutation, useVerifyEmailMutation } =
  authApi;
