import Image from "next/image";
import Hero from "@/public/images/portrait.svg";

const GreetingCard = () => {
  return (
    <div className="flex relative justify-between w-full rounded-xl bg-primary p-10 text-white shadow">
      <div className="relative">
        <h1 className="text-4xl">
          {" "}
          Hi, <span>Kelvin</span>{" "}
        </h1>
        <p className="mt-5">Ready to start your day with some pitch desks ?</p>
      </div>
      <div className="absolute z-10 top-[-4rem] left-[50rem]">
        <Image src={Hero} alt="Hero Image" height={600} />
      </div>
    </div>
  );
};

export default GreetingCard;
