import { BsPersonBadge } from "react-icons/bs";
export default function TopNavBar() {
    return (
      <nav className="flex justify-between items-center px-5 py-2">
        <form>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-transparent"
              placeholder="Search..."
              required
            />
          </div>
        </form>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div>
            <BsPersonBadge width={100} height={100} className="cursor-pointer" />
          </div>
        </div>
      </nav>
    );
  }