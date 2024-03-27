import React from "react";

interface HorizontalLineWithTextProps {
  text: string;
}

const HorizontalLineWithText: React.FC<HorizontalLineWithTextProps> = ({
  text,
}) => {
  return (
    <div className="relative flex flex-col items-center w-[50%]">
      <div className="flex justify-center items-center w-full">
        <div className="flex-grow border-t-2 border-gray-300"></div>
        <span className="px-4 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
          {text}
        </span>
        <div className="flex-grow border-t-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default HorizontalLineWithText;
