// CardImage.tsx
import Image from "next/image";
import { FC } from "react";

interface CardImageProps {
  imageUrl: string;
}

const CardImage: FC<CardImageProps> = ({ imageUrl }) => {
  return (
    <div className="h-full w-24">
      <Image src={imageUrl} alt="logo" width={64} height={64} />
    </div>
  );
};

export default CardImage;
