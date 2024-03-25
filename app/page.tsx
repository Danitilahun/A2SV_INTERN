"use client";

import { useGetOpportunitiesQuery } from "@/lib/api/job/jobSlice";
import { setOpportunities } from "@/lib/features/job/jobSlice";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const {
    data: opportunities,
    isLoading,
    isError,
  } = useGetOpportunitiesQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (opportunities) {
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

  redirect("/job");
}
