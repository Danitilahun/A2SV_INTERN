import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API slice
export const jobApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}`,
  }),
  endpoints: (builder) => ({
    getOpportunities: builder.query<Opportunities, void>({
      query: () => "opportunities/search",
    }),
    getOpportunityById: builder.query<SingleOpportunities, String>({
      query: (id) => `opportunities/${id}`,
    }),
  }),
});

export const { useGetOpportunitiesQuery, useGetOpportunityByIdQuery } = jobApi;
