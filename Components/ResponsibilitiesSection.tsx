import { FC } from "react";
import TaskList from "./TaskList";

interface ResponsibilitiesSectionProps {
  responsibilities: string[];
}

const ResponsibilitiesSection: FC<ResponsibilitiesSectionProps> = ({
  responsibilities,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Responsibilities</h1>
      <TaskList responsibilities={responsibilities} />
    </div>
  );
};

export default ResponsibilitiesSection;
