import DescriptionSection from "@/components/DescriptionSection";
import IdealCandidateSection from "@/components/IdealCandidateSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import WhenWhereSection from "@/components/WhenWhereSection";
import React from "react";

const JobDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col w-custom-width gap-10">
        <DescriptionSection />
        <ResponsibilitiesSection />
        <IdealCandidateSection />
        <WhenWhereSection />
      </div>
    </div>
  );
};

export default JobDetail;
