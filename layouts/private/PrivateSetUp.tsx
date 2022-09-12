import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import SetUpImage from "@/public/images/setup.jpg";

function Setup(page: ReactNode) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Fortuna | Set up Account</title>
      </Head>

      <div className="flex w-full overflow-y-hidden">
        <div className="flex-auto w-2/4 mt-2">
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between mx-5 md:mx-14">
            <h1>Fortuna</h1>

            <div className="flex flex-col md:flex-row gap-3 items-center">
              <p>If you already have an account </p>
              <button
                onClick={() => router.push("/beta/auth")}
                className="border border-[#d9dade] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-1 text-center"
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-8 md:mt-16">
            <div className="w-fit">
              <h1 className="text-3xl font-bold text-center">
                Get started now
              </h1>
              <p className="mt-4">
                Fill in the form below to get instant access
              </p>
            </div>
          </div>
          <div className="mx-5 md:mx-14 mt-5">{page}</div>
        </div>

        <div className="flex-auto hidden w-2/4 lg:flex xl:flex bg-primary flex-col">
          <Image
            src={SetUpImage}
            className="shadow w-fit h-fit"
            alt="Setup Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Setup;
