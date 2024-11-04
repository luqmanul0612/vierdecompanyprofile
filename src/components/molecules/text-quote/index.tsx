import { FC, ReactNode } from "react";
import classNames from "./text-quote.module.scss";
import clsx from "clsx";

type TextContentProps = {
  title: string;
  subTitle: string;
  description: ReactNode;
  className?: string;
};

const TextContent: FC<TextContentProps> = ({
  title,
  subTitle,
  description,
  className,
}) => {
  return (
    <div className={clsx(classNames.main, className)}>
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>{description}</p>
    </div>
  );
};

export default TextContent;
