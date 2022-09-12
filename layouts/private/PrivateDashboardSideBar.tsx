import Link from "next/link";

import { sideBarLinks as Links } from "@/layouts/private/PrivateDashboardLinks";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between bg-[#FFFFFF] border border-bd-gray h-full">
      <div>
        <div className="text-center mt-5"></div>
        <ul className="flex flex-col ">
          {Links.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              className="w-fit cursor-pointer hover:bg-blue-secondary"
            >
              <a className="p-4">
                <link.icons className="w-8 h-8 text-icon-gray" />
              </a>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full py-5 flex bg-blue-primary font-bold text-white item-center justify-center">
        K
      </div>
    </div>
  );
}
