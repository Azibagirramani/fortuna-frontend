import { FC } from "react";
import { MdEdit, MdOutlineDelete } from "react-icons/md";

import Image from "next/image";
import Ng from "@/public/images/loginScreen.jpg";

type IPostCard = {
  title: string;
  body: string;
  views: string;
  active: boolean;
};

const PostCard: FC<IPostCard> = ({ title, body, views, active }) => {
  return (
    <div className="flex justify-between w-full p-5 bg-gray-100 rounded-xl">
      <div className="flex flex-col items-center w-2/3  gap-4 md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover h-96 md:h-auto md:w-48 rounded"
          src={Ng}
          height={100}
          width={100}
          alt=""
        />
        <div className="leading-normal">
          <h5 className="text-lg font-bold tracking-tight text-blue-primary dark:text-white">
            {title}
          </h5>
          <p className="w-3/4 font-normal text-gray-700 dark:text-gray-400">
            {body ?? null}
          </p>
          <p className="font-bold">{views ?? "No data"}</p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-end">
        <div className="flex gap-3 items-center h-fit w-fit">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {active ? "Public" : "Private"}
          </span>
          <label
            htmlFor="small-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value="value"
              id="small-toggle"
              className="sr-only peer"
              checked={active ? true : false}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex gap-2">
          <MdEdit className="text-blue-primary h-5 w-5 cursor-pointer" />
          <MdOutlineDelete className="text-red-700 h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
