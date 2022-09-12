import { MdDashboard, MdViewList } from "react-icons/md";
import { SideBarLinks } from "./types";

/// route list
const sideBarLinks: SideBarLinks[] = [
  {
    label: "Dashboard",
    to: "/beta/dashboard",
    icons: MdDashboard,
  },
  {
    label: "Create",
    to: "/beta/dashboard/posts/create",
    icons: MdViewList,
  },
];

export { sideBarLinks };
