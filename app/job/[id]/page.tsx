"use client";
import DescriptionSection from "@/components/OpportunityDetail/DescriptionSection";
import IdealCandidateSection from "@/components/OpportunityDetail/IdealCandidateSection";
import ResponsibilitiesSection from "@/components/OpportunityDetail/ResponsibilitiesSection";
import WhenWhereSection from "@/components/WhenWhereSection";
import { useGetOpportunityByIdQuery } from "@/lib/api/job/jobSlice";

import React from "react";

const JobDetail = ({ params }: { params: { id: string } }) => {
  // Extract the id from the params object
  const id: String = params.id;

  // Fetch the opportunity by id
  const { data: opportunity } = useGetOpportunityByIdQuery(id);

  // Split the responsibilities string into an array of strings
  const responsibilities =
    opportunity?.data?.responsibilities.split("\n") || [];

  // Split the idealCandidate string into an array of strings
  const idealCandidate = opportunity?.data?.idealCandidate.split("\n") || [];

  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
        <DescriptionSection
          description={opportunity?.data?.description || ""}
        />
        <ResponsibilitiesSection responsibilities={responsibilities} />
        <IdealCandidateSection idealCandidate={idealCandidate} />
        <WhenWhereSection
          whenAndWhere={opportunity?.data?.whenAndWhere || ""}
        />
      </div>
    </div>
  );
};

export default JobDetail;
