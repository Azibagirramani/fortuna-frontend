import { FC } from "react";
import BaseButton from "@/components/forms/BaseButton";
import type { FeatureProps } from "@/components/types";

const Features: FC<FeatureProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col justify-between items-center rounded text-center transition-all cursor-pointer p-4 hover:outline hover:outline-blue-primary ">
      <div className="flex flex-col items-center justify-center">
        <Icon className="h-12 w-12 md:h-14 md:w-14" />
        <h1 className="my-1 font-extrabold text-sm md:text-lg">{title}</h1>
        <p className="my-4 text-sm md:text-base">{description}</p>
      </div>
      <BaseButton exClass="w-[80%]">Read more</BaseButton>
    </div>
  );
};

export default Features;
