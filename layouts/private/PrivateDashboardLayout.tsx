import Head from "next/head";
import { ReactNode } from "react";

import SideBar from "@/layouts/private/PrivateDashboardSideBar";
import TopNavBar from "@/layouts/private/PrivateDashboardTopBar";

function BaseDashboardLayout(page: ReactNode) {
  return (
    <div>
      <Head>
        <title>Fortuna | Dashboard</title>
      </Head>
      <div className="flex">
        <aside className="w-fit fixed left-0 top-0 h-screen">
          <SideBar />
        </aside>
        <div
          className="flex-1 ml-20 bg-background-gray"
          style={{ marginLeft: "5rem" }}
        >
          <div className="sticky top-0 z-50 mx-0">
            <TopNavBar />
          </div>

          <div className="bg-background-gray">{page}</div>
        </div>
      </div>
    </div>
  );
}

export default BaseDashboardLayout;
