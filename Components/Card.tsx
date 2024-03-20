import Image from "next/image";
import { FC } from "react";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardTopics from "./CardTopics";

const Card: React.FC<CardProps> = ({ item }) => {
  const { imageUrl, title, subTitle, description, relatedTopics } = item;

  return (
    <div className="h-custom-card-height w-[919px] rounded-[30px] border-[2px] bg-white p-[24px]">
      <div className="flex h-full w-full">
        <CardImage imageUrl={imageUrl} />
        <div className="h-full w-[755px] flex flex-col gap-[8px]">
          <CardHeader title={title} subTitle={subTitle} />
          <CardBody description={description} />
          <CardTopics relatedTopics={relatedTopics} />
        </div>
      </div>
    </div>
  );
};

export default Card;
