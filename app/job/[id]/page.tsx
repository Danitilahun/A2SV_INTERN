"use client";
import DescriptionSection from "@/components/DescriptionSection";
import IdealCandidateSection from "@/components/IdealCandidateSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import WhenWhereSection from "@/components/WhenWhereSection";
import {
  useGetOpportunitiesQuery,
  useGetOpportunityByIdQuery,
} from "@/lib/api/job/jobSlice";
import { usePathname } from "next/navigation";

import React from "react";

const JobDetail = () => {
  const pathname = usePathname();
  const id: String = pathname.split("/")[2];
  const { data: opportunity } = useGetOpportunityByIdQuery(id);
  console.log(opportunity);
  const responsibilities =
    opportunity?.data?.responsibilities.split("\n") || [];
  const idealCandidate = opportunity?.data?.idealCandidate.split("\n") || [];

  console.log("idealCandidate", idealCandidate);

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
