import Link from "next/link";
import Image from "next/image";

import BaseButton from "../forms/BaseButton";

import { NavBarLinks } from "../types"

// logo
import Logo from "../../public/images/logo.png"

const BaseNavBar = (props: { links: any }) => {
    const { links } = props
    const NavLinks: NavBarLinks[] = [...links]

    return (
        <>
            <nav className="mx-4 xl:mx-48 lg:mx-32 md:mx-10 transition-all duration-700 md:pt-8 pt-2">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center hover:text-subSecondary">
                        <Image
                            src={Logo}
                            className="rounded-lg"
                            height={50}
                            width={50}
                        />
                        <span className="ml-2 self-center text-xl font-extrabold whitespace-nowrap dark:text-white hover:text-subSecondary">Fortuna</span>
                    </a>

                    <ul className="flex items-center gap-3 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {
                            NavLinks.map((items, index) => {
                                return <li className="mb-4 lg:mb-0 md:mb-0" key={index}>
                                    <Link href={items.to}>
                                        {
                                            items.type === "button" ? <BaseButton exClass="py-3"> {items.label} </BaseButton> : <a className="text-gray-light font-medium xl:text-lg hover:text-subSecondary" aria-current="page">{items.label}</a>
                                        }
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default BaseNavBar;