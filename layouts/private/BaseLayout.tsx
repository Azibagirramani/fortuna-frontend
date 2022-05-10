import type { ReactElement } from "react";

/// components import
import BaseSideBar from "./BaseSideBar";
import BaseTopNav from "./BaseTopNav";

function DashboardLayout (page: ReactElement){
    return (
        <>
        <div className="flex">
            <BaseSideBar />
            <main id="main-content">
                <BaseTopNav />
                <div className="content">
                    {page}
                </div>
            </main>
        </div>
        </>
    )
}


export default DashboardLayout;