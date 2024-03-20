import { FC } from "react";

interface CardTopicsProps {
  relatedTopics: string[];
}

const CardTopics: FC<CardTopicsProps> = ({ relatedTopics }) => {
  return (
    <div className="flex h-8 gap-2 my-3">
      {/* Mapping through relatedTopics assuming there are always 3 items for simplicity; adjust as necessary */}
      {relatedTopics.map((topic, index) => (
        <TopicItem key={index} topic={topic} index={index} />
      ))}
    </div>
  );
};

interface TopicItemProps {
  topic: string;
  index: number;
}

const TopicItem: FC<TopicItemProps> = ({ topic, index }) => {
  const colors = ["custom-bg-color", "custom-yellow", "custom-blue"]; // Class names for colors
  const borderColor = ["", "border-custom-yellow", "border-custom-blue"]; // Border color classes
  return (
    <div className={`custome-style ${borderColor[index]} cursor-pointer`}>
      <div className={`custom-text text-${colors[index]}`}>{topic}</div>
    </div>
  );
};

export default CardTopics;
