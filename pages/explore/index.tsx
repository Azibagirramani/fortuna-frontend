import dynamic from "next/dynamic";
import { Fragment, Key, useState } from "react";
import { useEffect } from "react";

import PublicLayout from "@/layouts/public";
import ExploreCard from "@/components/ExploreCard";
import BaseFilter from "@/components/filter/BaseFilter";

import { Axois } from "../../proxies/Axios";

import { INeeds } from "@/core/types";

const DynamicSkeleton = dynamic(() => import("@/components/skeleton/explore"), {
  ssr: false,
});

function Explore() {
  const [IsLoading, setLoader] = useState(false);
  const [needs, setNeeds] = useState<INeeds[]>([]);

  // get needs
  const fetchNode = async () => {
    setLoader(true);
    try {
      const data = await Axois.get("needs/explore");
      setNeeds(data.data.data);
      console.log(data.data.data, "Explore");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchNode();
  }, []);
  return (
    <div className="flex h-screen md:pt-20 lg:pt-14 xl:pt-16">
      <div className="w-1/2 overflow-auto bg-[#f3f6f8] relative">
        <div className="fixed bg-white z-10 w-1/2 mt-3 py-2">
          {/* <BaseFilter /> */}
        </div>

        <div className="mt-24">
          <div className="mt-5 my-10 mx-8">
            {IsLoading && <DynamicSkeleton />}
            {needs.length <= 0 && "No data"}
            {needs.map((items, index) => {
              return <ExploreCard {...items} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-500"></div>
    </div>
  );
}

Explore.getLayout = PublicLayout;
export default Explore;
