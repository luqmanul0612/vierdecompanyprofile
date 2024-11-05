import { FC, ReactNode } from "react";
import classNames from "./card-info-image.module.scss";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/atoms/button";
import { ChevronRight } from "lucide-react";

type CardInfoImageProps = {
  title: string;
  subTitle: string;
  description: ReactNode;
  className?: string;
  image: StaticImageData;
  button: {
    label: string;
    onClick?: () => void;
  };
};

const CardInfoImage: FC<CardInfoImageProps> = (props) => {
  const { title, subTitle, description, className, image, button } = props;
  return (
    <div className={clsx(classNames.main, className)}>
      <div className={classNames.info}>
        <p>{title}</p>
        <p>{subTitle}</p>
        <p>{description}</p>
        <Button
          endIcon={<ChevronRight size={18} />}
          variant="secondary"
          onClick={button.onClick}
          className={classNames.button}
        >
          {button.label}
        </Button>
      </div>
      <div className={classNames.image}>
        <Image src={image} alt="logo" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default CardInfoImage;
