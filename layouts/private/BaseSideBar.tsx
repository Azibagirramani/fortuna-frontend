import Link from "next/link";
import { useRouter } from "next/router";
import { sideBarLinks } from "./SideBarLinks";


function BaseSideBar(){
    let currentRoute = useRouter().pathname

    return (
        <aside id="sidebar">
        <div className="aside-container">
            <div className="aside-header">
                <div className="aside-header-logo">
                    {/* <i className="bi bi-app logo"></i> */}
                    <a className="logo">Logo</a>
                    <div className="aside-header--labels" id="header-labels">
                        <p>Fortuna </p>
                        <p>Workspace</p>
                    </div>
                </div>
                <div className="aside-header-arrows me-auto" id="aside-header-arrows">
                    <i className="bi bi-chevron-up"></i>
                    <i className="bi bi-chevron-down"></i>
                </div>
            </div>
            <nav id="nav-label">
                {
                    sideBarLinks.map((items, index)=> {
                        return (
                            <li className={ items.to === currentRoute ? "active" : "" } key={index}>
                                <Link href={items.to}>
                                    <a>
                                        {items.icons ? <items.icons size={ 25 } color = '#6b6f7b' /> : ""} <span>{items.label}</span>
                                    </a>
                                </Link>
                        </li>
                        )
                    })
                }
            </nav>
        </div>
    </aside>
    )
}

export default BaseSideBar;