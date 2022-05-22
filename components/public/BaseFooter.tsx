import Link from "next/link";

import { FooterLinks } from "../types";

export default () => {

    const footerLinks: FooterLinks[] = [
        {
            title: "Pages",
            links: [

                {
                    label: "Teams",
                    to: "#"
                },
                {
                    label: "Contacts",
                    to: ""
                },
                {
                    label: "Issues",
                    to: ""
                },
                {
                    label: "Beta - login",
                    to: ""
                }
            ]
        },
        {
            title: "Product Features",
            links: [
                {
                    label: "coming soon",
                    to: "#"
                }
            ]
        },
        {
            title: "Resource",
            links: [
                {
                    label: "coming soon",
                    to: "#"
                }
            ]
        }
    ]

    return (
        <footer className="flex flex-col gap-9 xl:flex-row md:flex-row lg:justify-between mx-5 lg:mx-[4rem] xl:mx-[10rem] xl:p-0 lg:p-0 pt-10">
            <div className="flex flex-col lg:justify-between">
                <h1 className="text-2xl font-extrabold">Fortuna</h1>
                <div>
                    <p className="mt-5">@2021 Lorem ipsum dolor sit </p>
                    <p>amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {footerLinks.map((items, index) => {
                return <div className="" key={index}>
                    <h3 className="font-extrabold">{items.title}</h3>
                    <ul className="mt-4">
                        {items.links?.map((links, linkIndex) => {
                            return <li className="mb-3 last:mb-0" key={linkIndex}>
                                <Link href={links?.to}>
                                    <a className="font-normal text-black hover:text-moony">{links.label}</a>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            })}

            <div className="">
                <h1 className="text-2xl font-extrabold">Get in touch</h1>
                <p className="mt-2">Questions or feedbacks? </p>
                <p className="">We'd love to hear from you </p>
            </div>
        </footer>
    )
}