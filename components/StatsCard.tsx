import { FC } from "react";
import Image from "next/image";

import Hero from "@/public/images/portrait.svg";

type IStatsCard = {
  heading: string;
  label: string;
  icon: any;
  color: string;
  img: string;
};
const StatsCard: FC<IStatsCard> = ({
  heading,
  label,
  icon,
  color,
  img = Hero,
}) => {
  return (
    <div
      className={`flex gap-8 p-3 items-center ${
        color ? color : "bg-[#000000]"
      } rounded-lg`}
    >
      <Image src={img ? img : Hero} alt="" width={50} height={50} />
      <div>
        <h1 className="text-white text-2xl font-bold">{heading}</h1>
        <p className="text-white font-light">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
