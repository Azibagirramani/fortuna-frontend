import { MdDashboard, MdEmojiPeople, MdPayments, MdStackedLineChart } from "react-icons/md";
import { SideBarLinks } from "./types"



const sideBarLinks: SideBarLinks[] = [
    {
        label: "Dashboard",
        to: "/private-beta",
        icons: MdDashboard
    },
    {
        label: "Donors Section",
        to: "/private-beta/donor",
        hasBadge: true,
        icons: MdEmojiPeople
    },
    {
        label: "Finance Section",
        to: "",
        icons: MdPayments
    },
    {
        label: "Reports",
        to: "",
        icons: MdStackedLineChart
    }
]

export { sideBarLinks }