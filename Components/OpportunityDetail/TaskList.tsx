import { FC } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface TaskListProps {
  responsibilities: string[];
}

const TaskList: FC<TaskListProps> = ({ responsibilities }) => {
  return (
    <div className="flex flex-col gap-4">
      {responsibilities?.map((responsibility, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaRegCircleCheck className="text-green-500" />
          <span>{responsibility}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
