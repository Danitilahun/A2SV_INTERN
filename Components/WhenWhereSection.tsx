import { FaLocationDot } from "react-icons/fa6";

const WhenWhereSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl"> When & Where </h1>
      <div className="flex gap-2 items-center">
        <span className="font-bold">
          <FaLocationDot className="text-blue-500 rounded-full border border-gray-700 p-2 w-9 h-9" />
        </span>
        <span className="">
          The onboarding event for this event will take place on Jan 18th, 2023
          in AAU Auditorium
        </span>
      </div>
    </div>
  );
};

export default WhenWhereSection;
