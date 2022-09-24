import Head from "next/head";

import SideBar from "@/layouts/private/PrivateDashboardSideBar";
import TopNavBar from "@/layouts/private/PrivateDashboardTopBar";

import { ReactNode, useEffect } from "react";

function BaseDashboardLayout(page: ReactNode) {
  useEffect(() => {
    console.log("Logger");
  }, []);

  return (
    <>
      <Head>
        <title>Fortuna | Dashboard</title>
      </Head>
      <div className="flex py-10">
        <aside className="w-80  py-10 fixed left-0 top-0 h-screen">
          <SideBar />
        </aside>
        <div className="flex-1" style={{ marginLeft: "20.5rem" }}>
          <div className="sticky top-0 z-50 mx-10">
            <TopNavBar />
          </div>
          <div className="bg-background-gray mt-6 mx-10">{page}</div>
        </div>
      </div>
    </>
  );
}

export default BaseDashboardLayout;
