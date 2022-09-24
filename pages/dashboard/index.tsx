import BaseDashboardLayout from "@/layouts/private/PrivateDashboardLayout";

import Pitch from "@/public/images/icons8-pitch-64.png";
import Comment from "@/public/images/icons8-comment-64.png";
import Connect from "@/public/images/icons8-connect-64.png";
import Report from "@/public/images/icons8-graph-report-100.png";

import StatsCard from "@/components/StatsCard";
import GreetingCard from "@/components/Greeting";
import PostCard from "@/components/PostCard";

function Dashboard() {
  const postList = [
    {
      title: "Noteworthy",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      views: "20 views",
      active: true,
      options: true,
    },
    {
      title: "Digital marketing for students",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      views: "20 views",
      active: false,
      options: true,
    },
  ];

  const stats = [
    {
      heading: "50",
      label: "Live Pitch",
      icon: "",
      color: "bg-[#8ecae6]",
      img: Pitch,
    },
    {
      heading: "13.3k",
      label: "Comments",
      icon: "",
      color: "bg-[#fb8500]",
      img: Comment,
    },
    {
      heading: "10",
      label: "Connects",
      icon: "",
      color: "bg-[#219ebc]",
      img: Connect,
    },
    {
      heading: "0",
      label: "Reports",
      icon: "",
      color: "",
      img: Report,
    },
  ];

  return (
    <div className="mt-20">
      <GreetingCard />

      <div id="overview-content" className="mt-10">
        <h1 className="text-lg text-gray-400">Overview</h1>
        <div className="flex items-center gap-5 mt-5">
          {stats.map((items, index) => {
            return (
              <div key={index} className="w-full">
                <StatsCard {...items} />
              </div>
            );
          })}
        </div>
        <div className="w-full mt-5">
          {postList.map((items, index) => {
            return (
              <div className="mt-5" key={index}>
                <PostCard {...items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = BaseDashboardLayout;

export default Dashboard;
