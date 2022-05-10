import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

/// layout import
import PublicLayout from "../layouts/public/index"

/// components import
import HeroImage from "../public/images/Bikes.svg"
import BaseButton from "../components/forms/BaseButton";


function Home (){
  const [loader, setLoader] = useState<boolean>(false)
  const updatedState = () => {
    setLoader(!loader)
  }

  return (
    <>  
    <Head>
      <title>
        Welcome to Fortuna
      </title>
    </Head>
    <div className="container md:mx-auto lg:mx-auto lg:pt-[2rem] px-5 lg:px-[0.09rem] md:px-3">
      <div className="flex justify-center lg:flex-row md:flex-row flex-col mt-8 gap-[1rem]">
        <div className="flex-1 text-center lg:text-left md:text-left">
          <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[3.7rem] text-secondary font-extrabold leading-normal">Share your smile with <br/> the world and <br className="d-none" /> find a friend</h1>
          <p className="mt-[2rem] text-secondary">Thousands of new profiles delivered <br/> weekly to your inbox</p>
          <div className="flex flex-col mt-5">
            <p className="text-secondary">Join beta team</p>
            <form className="flex justify-center lg:justify-start md:justify-start gap-3 align-middle mt-3">
                <input type="email" className="w-[fit-content] rounded" placeholder="Enter your email" required/>
                <BaseButton type="submit" loading={loader} onClick={updatedState}>
                  Register
                </BaseButton>
                
            </form>
          </div>
        </div>
        <div className="md:flex-1 flex-2 -z-10">
          <Image 
            src={HeroImage}
          />
        </div>
      </div>
    </div>

    </>
 
  )
}

Home.getLayout = PublicLayout


export default Home
