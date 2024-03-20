import AttributesList from "@/components/AttributesList";
import TaskList from "@/components/TaskList";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const JobDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen my-4">
      <div className="flex flex-col px-10 w-custom-width">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Description</h1>
          <p>
            As a Social Media Assistant, you will work closely with the social
            media manager or marketing team to execute social media strategies
            and campaigns. You will be responsible for assisting in the creation
            and scheduling of engaging content, monitoring social media
            channels, and interacting with followers. Your primary goal will be
            to enhance brand visibility, foster positive relationships with the
            audience, and drive engagement and conversions
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Responsibilities</h1>
          <TaskList />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
          <AttributesList />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl"> When & Where </h1>
          <div className="flex gap-2 items-center">
            <span className="font-bold">
              <FaLocationDot className="text-blue-500 rounded-full border border-gray-700 p-2 w-9 h-9" />
            </span>
            <span className="">
              The onboading event for this event will take place in Jan 18th,
              2023 in AAU Auditorium
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
