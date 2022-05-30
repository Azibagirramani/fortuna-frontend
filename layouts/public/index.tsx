import type { ReactElement } from 'react'

import PublicNavBar from "../../components/public/BaseNavbar";
import PublicFooter from "../../components/public/BaseFooter";


import { NavBarLinks } from "../../components/types"


function PublicLayout(page: ReactElement) {

  const links: NavBarLinks[] = [
    {
      label: "Help",
      to: "''",
    },

    {
      label: "Contact",
      to: "''",
    },
  ]
  return (
    <div className="h-screen">
      <PublicNavBar links={links} />
      {page}
      <PublicFooter />
    </div>
  )
}

export default PublicLayout;