import Head from "next/head";
import Image from "next/image";

/// layout import
import PublicLayout from "../layouts/public/index"

/// components import
import HeroImage from "../public/images/Bikes.svg"
import BaseButton from "../components/forms/BaseButton";


function Home (){
  return (
    <>  
    <Head>
      <title>
        Welcome to Fortuna 
      </title>
    </Head>
      <div className="flex justify-center lg:flex-row md:flex-row flex-col mt-10 gap-10 mx-5 lg:mx-[4rem] xl:mx-[10rem]">
        <div className="flex-1 text-center mx-auto lg:text-left md:text-left">
          <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] xl:text-7xl xl:leading-normal text-black-100 font-extrabold leading-normal">Share your smile with <br/> the world and <br className="d-none" /> find a friend</h1>
          <p className="mt-[2rem] text-black-100 xl:text-2xl xl:font-medium lg:font-medium font-extrabold">Thousands of new profiles delivered <br/> weekly to your inbox</p>
          <div className="flex flex-col mt-5">
            <BaseButton type="button">
              <span className="font-capitalize font-extrabold text-[white]">Join Beta Team</span>
            </BaseButton>
          </div>
        </div>
        <div className="md:flex-1 -z-10">
          <Image 
            src={HeroImage}
          />
        </div>
      </div>
    </>
 
  )
}

Home.getLayout = PublicLayout


export default Home
