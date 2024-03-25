"use client";
import DescriptionSection from "@/components/DescriptionSection";
import IdealCandidateSection from "@/components/IdealCandidateSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import WhenWhereSection from "@/components/WhenWhereSection";
import { useGetOpportunitiesQuery } from "@/lib/api/job/jobSlice";
import { usePathname } from "next/navigation";

import React from "react";

const JobDetail = () => {
  const pathname = usePathname();

  const { data: opportunities } = useGetOpportunitiesQuery();

  const opportunity = opportunities?.data.find(
    (item) => item.id === pathname.split("/")[2]
  );
  const responsibilities = opportunity?.responsibilities.split("\n");

  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
        <DescriptionSection description={opportunity?.description} />
        <ResponsibilitiesSection responsibilities={responsibilities} />
        <IdealCandidateSection />
        <WhenWhereSection />
      </div>
    </div>
  );
};

export default JobDetail;
