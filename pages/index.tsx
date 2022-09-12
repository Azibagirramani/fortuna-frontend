import Head from "next/head";
import { useState } from "react";

// layout import
import PublicLayout from "@/layouts/public/index";

// component import
import BaseButton from "@/components/forms/BaseButton";
import BaseInput from "@/components/forms/BaseInput";
import BaseAlert from "@/components/notifications/BaseAlert";

function Landing() {
  const [loader, setLoader] = useState<boolean>(false);

  const sendRequest = () => {
    setLoader(true);
    console.log("sending email");
    setTimeout(() => {
      setLoader(false);
      BaseAlert({
        type: "success",
        message: "Request sent successfully",
      });
    }, 2000);
  };
  return (
    <div className="md:pt-20 lg:pt-14 xl:pt-16">
      <Head>
        <title>Welcome to Fortuna</title>
      </Head>
      <div className="mx-5 md:mx-20 xl:mx-72 transition-all duration-700 mt-24">
        <div className="flex flex-col-reverse">
          <div>
            <div className="md:w-[60%]">
              <p className="text-blue-primary font-bold uppercase text-xs">
                coming soon
              </p>
              <h1 className="text-gray-400 text-3xl md:text-5xl lg:text-5.8xl mt-3">
                Introducing Fortuna
              </h1>
              <p className="mt-3 text-[#838383] text-sm md:text-lg">
                A small donation can make a huge difference, Do a good deed by
                giving to those in need. Do not delay. Give today!
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10 w-full lg:w-[70%] xl:w-[80%]">
              <div className="w-full ">
                <BaseInput
                  placeholder="Please enter your email"
                  exClass="shadow border-none"
                  type={""}
                  name={""}
                  onBlur={() => {}}
                />
              </div>
              <div className="md:w-[90%] w-full">
                <BaseButton
                  type="button"
                  loading={loader}
                  onClick={sendRequest}
                  exClass=""
                >
                  Request Early access
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.getLayout = PublicLayout;

export default Landing;
