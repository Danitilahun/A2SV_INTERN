"use client";
import { useGetOpportunitiesQuery } from "@/lib/api/job/jobSlice";
import { setOpportunities } from "@/lib/features/job/jobSlice";
import { useDispatch } from "@/lib/store";
import { useEffect, useState } from "react";

export default function Home() {
  const {
    data: opportunities,
    isLoading,
    isError,
  } = useGetOpportunitiesQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (opportunities && opportunities.data) {
      dispatch(setOpportunities(opportunities.data));
    }
  }, [opportunities, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching opportunities</div>;
  }

  console.log(opportunities);

  return <div>Redirecting...</div>;
}
