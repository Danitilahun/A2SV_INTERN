import { FC } from "react";
import AttributesList from "./AttributesList";

const IdealCandidateSection: FC<{
  idealCandidate: String[];
}> = ({ idealCandidate }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
      <ul className="text-gray-500 list-disc list-inside dark:text-gray-400">
        {idealCandidate.map(
          (attribute, index) => attribute && <li key={index}>{attribute}</li>
        )}
      </ul>
    </div>
  );
};

export default IdealCandidateSection;
