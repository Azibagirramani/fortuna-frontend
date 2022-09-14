import type { ReactElement } from "react";
import { useStore } from "@/store/index";

import PublicNavBar from "@/components/public/BaseNavbar";

import { NavBarLinks } from "@/components/types";

function PublicLayout(page: ReactElement) {
  const { store } = useStore();

  const links: NavBarLinks[] = [
    {
      label: "Coming soon",
      to: "#",
    },
    {
      label: store.loggedIn ? "Dashboard" : "Login",
      to: store.loggedIn ? "/beta/dashboard" : "/beta/auth",
    },
  ];
  return (
    <div className="h-screen">
      <PublicNavBar links={links} />
      <div>{page}</div>
    </div>
  );
}

export default PublicLayout;
