import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";

import { sideBarLinks as Links } from "@/layouts/private/PrivateDashboardLinks";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between m-auto h-full">
      <ul className="flex flex-col" style={{ marginInline: "3.5rem" }}>
        <a href="#" className="flex items-center hover:text-subSecondary mb-8">
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white hover:text-subSecondary">
            Fort<span className="text-blue-primary">una</span>
          </span>
        </a>

        <div className="flex items-center gap-2 mb-10 rounded-2xl p-4 bg-gray-100">
          <p className="font-bold capitalize">create new pitch</p>
          <button
            type="button"
            className="text-white bg-blue-700 p-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <BsPlusLg />
          </button>
        </div>

        {Links.map((link, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer hover:bg-primary hover:text-white transition-all ease-out delay-150 pl-4 py-4 mb-5 rounded-2xl my-2 ${
                index === 1 ? "bg-primary text-white" : null
              }`}
            >
              <Link href={link.to}>
                <a className="flex items-center gap-5">
                  <link.icons className="w-6 h-6" />
                  <span className="text-base font-semibold">{link?.label}</span>
                </a>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
