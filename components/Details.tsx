import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import ng from "../public/images/nigeria.png";
import { FC } from "react";

type IDetails = {
  bg: string;
  text: string;
  showTimeDate: boolean;
};

const DetailCard: FC<IDetails> = ({ bg, text, showTimeDate }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col rounded-2xl pb-5 pt-2 pr-4 pl-5  text-xs text-white  cursor-pointer ${bg}`}
      >
        <span className="flex justify-end">
          <BsThreeDots className={` h-6 w-6 ${text} `} />
        </span>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <Image
              src={ng}
              alt="Nigerian flag"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h2 className={`text-2xl ${text} font-bold`}>Nintendo</h2>
              <h5 className={`text-base ${text} `}>Onboarding</h5>
            </div>
          </div>

          <div className="mt-5">
            <IoChevronForwardOutline className={`h-6 w-6 ${text} `} />
          </div>
        </div>
        <div className={`flex items-center ${text} gap-2 mt-4`}>
          <FaClock className="h-5 w-5" />
          <span className="font-bold text-base">9:00 - 9:45 pm</span>
        </div>
      </div>
      {showTimeDate && (
        <div className="bg-gray-100 font-bold text-gray-400 p-4 rounded-2xl mt-2">
          <span>9:45 - 10:00 coffee break</span>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
