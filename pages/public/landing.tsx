import Image from "next/image";
import Head from "next/head";

// icons import 
import { BsArrowRight, BsViewList } from "react-icons/bs";
// layout import
import PublicLayout from "../../layouts/public/index"

// component import 
import BaseButton from "../../components/forms/BaseButton";

// image assets import
import HeroImage from "../../public/images/hero.svg";

function Landing() {
    return (
        <div className="md:pt-20 lg:pt-14 xl:pt-16">
            <Head>
                <title>Welcome to Fortuna</title>
            </Head>
            <div className="mx-4 mt-10 xl:mx-48 lg:mx-32 md:mx-10 transition-all duration-700">
                <div className="flex flex-col-reverse gap-10 xl:gap-0 md:gap-6 xl:flex-row lg:flex-row md:flex-row md:items-center xl:items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-4xl md:font-medium lg:text-4xl xl:text-6xl font-bold">A small donation can make a huge difference</h1>
                        <p className="mt-3 md:text-medium lg:text-lg xl:text-xl">Do a good deed by giving to those in need.</p>
                        <p className="md:text-medium lg:text-lg xl:text-xl">Don’t delay. Give today!</p>
                        <BaseButton exClass="p-3 bg-primary text-white mt-8 hover:bg-secondary duration-300 hover:ease-in w-full lg:w-fit">
                            <div className="flex gap-6 items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                                <div className="flex gap-2 items-center"><BsViewList /><span>Explore Needs</span> </div>
                                <BsArrowRight />
                            </div>
                        </BaseButton>
                    </div>
                    <div className="md:flex-1 md:w-2/5 flex justify-center align-middle">
                        <Image
                            src={HeroImage}
                            className="shadow rounded-full"
                            height={400}
                            width={400}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}


Landing.getLayout = PublicLayout;

export default Landing;
