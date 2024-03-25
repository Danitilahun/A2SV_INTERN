import Image from "next/image";
import { FC } from "react";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardTopics from "./CardTopics";

const Card: React.FC<{ Opportunity: Opportunity }> = ({ Opportunity }) => {
  const { logoUrl, title, orgName, description, categories } = Opportunity;

  return (
    <div className="h-custom-card-height w-[919px] rounded-[30px] border-[2px] bg-white p-[24px]">
      <div className="flex h-full w-full">
        <CardImage imageUrl={logoUrl} />
        <div className="h-full w-[755px] flex flex-col gap-[8px]">
          <CardHeader title={title} subTitle={orgName} />
          <CardBody description={description} />
          <CardTopics relatedTopics={categories} />
        </div>
      </div>
    </div>
  );
};

export default Card;
