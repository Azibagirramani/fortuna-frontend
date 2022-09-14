import dynamic from "next/dynamic";
import { Fragment, Key, useState } from "react";
import { useEffect } from "react";

import PublicLayout from "@/layouts/public";
import ExploreCard from "@/components/ExploreCard";
import BaseFilter from "@/components/filter/BaseFilter";

import { Axois } from "@/utilities/axios";

import { INeeds } from "@/core/types";

const DynamicSkeleton = dynamic(() => import("@/components/skeleton/expore"), {
  ssr: false,
});

function Explore() {
  const [loader, setLoader] = useState<Boolean>(true);
  const [needs, setNeeds] = useState<INeeds[]>([]);

  // get needs
  const fetchNode = async () => {
    setLoader(true);
    try {
      const data = await Axois.get("needs/explore");
      setNeeds(data.data.data);
      console.log(data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    // fetchNode();
  }, []);

  return (
    <div className="flex h-screen md:pt-20 lg:pt-14 xl:pt-16">
      <div className="w-1/2 overflow-auto bg-[#f3f6f8] relative">
        <div className="fixed bg-white z-10 w-1/2 mt-3 py-2">
          <BaseFilter />
        </div>

        <div className="mt-24">
          {loader ? (
            <DynamicSkeleton />
          ) : (
            <div className="mx-5">
              {needs.length <= 0 ? (
                "No data"
              ) : (
                <div className="mt-5 my-10">
                  {needs.map((items, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="mt-5">
                          <ExploreCard {...items} />
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 bg-gray-500"></div>
    </div>
  );
}

Explore.getLayout = PublicLayout;
export default Explore;
