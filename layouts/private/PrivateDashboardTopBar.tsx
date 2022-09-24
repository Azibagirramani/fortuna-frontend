import { VscMail } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

export default function TopNavBar() {
  const user = useSelector((state: RootState) => state).user;

  const date = new Date();
  const dateTime =
    `${date.getFullYear()} - ${date.getMonth()} - ${date.getDay()}` as string;
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-black font-bold">Dashboard</h1>
        <div className="text-sm">
          Monday <span className="text-gray-400">{dateTime}</span>
        </div>
      </div>
      <div className="flex items-center gap-8" style={{ marginRight: "4rem" }}>
        <VscMail className="h-6 w-6" />
        <IoIosNotificationsOutline className="h-6 w-6" />

        <div className="flex gap-5">
          <div className="bg-blue-primary rounded-lg p-3 px-4 text-white font-bold">
            JK
          </div>
          <button
            id="dropdownAvatarNameButton"
            data-dropdown-toggle="dropdownAvatarName"
            className="flex items-center text-sm font-medium text-gray-900 rounded-full dark:hover:text-blue-500 md:mr-0 dark:focus:ring-gray-700 dark:text-white"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <span>{user.name ? user.name : user.email}</span>
            <svg
              className="w-4 h-4 mx-1.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
