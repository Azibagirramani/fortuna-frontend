import React, { FC } from "react";
import Image from "next/image";
import { MdMyLocation } from "react-icons/md";

import Logo from "@/public/images/logo.png";
import { INeeds } from "@/core/types";

const ExploreCard: FC<INeeds> = ({
  title,
  createdAt,
  country,
  city,
  purpose,
}) => {
  return (
    <>
      <div className="flex w-full gap-10 items-center shadow-sm rounded-md transition-all hover:cursor-pointer hover:shadow-md p-5 bg-white">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between gap-3">
            <p className="text-base">{title}</p>
            <div className="flex items-center gap-2 text-[#bcc1c7]">
              <div className="flex items-center gap-2">
                <MdMyLocation className="" size={10} />
                <p className="text-xs">
                  {" "}
                  {country}, {city}
                </p>
              </div>
              <p className="text-xs">
                Posted{" "}
                <span className="w-fit px-2 py-1 rounded-full bg-[#fff4f8] text-red-500">
                  {createdAt.toString()}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h4 className="text-lg text-blue-primary">{purpose}</h4>
              <div className="bg-[#bcc1c7] text-xs rounded-full px-1 text-center">
                <span>new</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
