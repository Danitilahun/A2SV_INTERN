import { FC } from "react";

interface CardHeaderProps {
  title: string;
  subTitle: string;
}

const CardHeader: FC<CardHeaderProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div className="font-semibold text-5 text-custom-text-darkblue">
        {title}
      </div>
      <div className="flex h-[27px] gap-[8px] items-center">
        <div className="font-normal text-4 custom-color">{subTitle}</div>
        <div className="w-1 h-1 flex items-center justify-center bg-custom-bg-gray rounded-full"></div>
        <div className="font-normal text-4 custom-color">
          Addis Ababa, Ethiopia
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
