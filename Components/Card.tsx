import Image from "next/image";
import { FC } from "react";

const Card: FC<CardProps> = ({ item }) => {
  const { imageUrl, title, subTitle, description, relatedTopics } = item;

  return (
    <div className="h-custom-card-height w-[919px] rounded-[30px] border-[1px] bg-white p-[24px]">
      <div className="flex h-full w-full">
        <div className="h-full w-24">
          <Image src={imageUrl} alt="logo" width={64} height={64} />
        </div>
        <div className="h-full w-[755px] flex flex-col gap-[8px]">
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

          <div className="w-[744px] h-[112px] text-4 leading-[25.6px] text-custom-text-darkblue font-[400]">
            {description}
          </div>

          <div className="flex h-8 gap-2 my-3">
            <div className="custome-style bg-custom-bg-color cursor-pointer">
              <div className="custom-text text-custom-text-color">
                {relatedTopics[0]}
              </div>
            </div>

            <div className="h-full w-[1.5px] bg-gray-300"></div>

            <div className="custome-style border border-custom-yellow cursor-pointer">
              <div className="custom-text text-custom-yellow">
                {relatedTopics[1]}
              </div>
            </div>

            <div className="custome-style border border-custom-blue cursor-pointer">
              <div className="custom-text text-custom-blue">
                {relatedTopics[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
