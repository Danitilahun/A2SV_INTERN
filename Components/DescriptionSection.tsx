import { FC } from "react";

interface DescriptionSectionProps {
  description: string;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Description</h1>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionSection;
