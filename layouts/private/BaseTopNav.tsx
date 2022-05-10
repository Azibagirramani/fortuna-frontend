import Link from "next/link";

function BaseTopNav (){
    return (
        <>
            <div className="navbar-top">
                <nav>
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <Link  href="#">
                            <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Dashboard 
                            </a>
                        </Link>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default BaseTopNav;

