import { RiDashboardLine, RiMistFill } from "react-icons/ri";
import {
  VscCommentDiscussion,
  VscReport,
  VscHeart,
  VscAccount,
} from "react-icons/vsc";
import type { SideBarLinks } from "./types";

/// route list
const sideBarLinks: SideBarLinks[] = [
  {
    label: "Dashboard",
    to: "/beta/dashboard",
    icons: RiDashboardLine,
  },
  {
    label: "Pitch",
    to: "/dashboard",
    icons: RiMistFill,
  },
  {
    label: "Finance",
    to: "/dashboard",
    icons: VscHeart,
  },
  {
    label: "Comments",
    to: "/dashboard",
    icons: VscCommentDiscussion,
  },
  {
    label: "Account",
    to: "/dashboard/select",
    icons: VscAccount,
  },
  {
    label: "Profile setup",
    to: "/dashboard/account",
    icons: VscAccount,
  },
  {
    label: "Report",
    to: "/dashboard",
    icons: VscReport,
  },
];

export { sideBarLinks };
