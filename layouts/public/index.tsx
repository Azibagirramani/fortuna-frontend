import type { ReactElement } from 'react'

import PublicNavBar from "../../components/public/BaseNavbar";
import PublicFooter from "../../components/public/BaseFooter";


import { NavBarLinks } from "../../components/types"


function PublicLayout(page: ReactElement){

  const links: NavBarLinks[] = [
    {
      label: "Teams",
      to: ""
    },
    {
      label: "Contacts",
      to: ""
    },
    {
      label: "Issues",
      to:""
    },
    {
      label: "Beta - login",
      to:""
    }
  ]
    return(
      <>
        <PublicNavBar links={links} />
          {page}
        <PublicFooter />
      </>
    )
}

export default PublicLayout;