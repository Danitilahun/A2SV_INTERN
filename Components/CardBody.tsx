import { FC } from "react";

interface CardBodyProps {
  description: string;
}

const CardBody: FC<CardBodyProps> = ({ description }) => {
  return (
    <div className="w-[744px] h-[112px] text-4 leading-[25.6px] text-custom-text-darkblue font-[400]">
      {description}
    </div>
  );
};

export default CardBody;
