const TimeLine = () => {
  return (
    <>
      <div className="text-end mt-2">
        <time className="text-gray-400 font-extralight text-sm"> 9:00 </time>
      </div>
      <div className="flex gap-4 items-center p-5 w-fit cursor-pointer hover:bg-primary hover:text-white hover:rounded-lb-xl hover:rounded-tr-full hover:rounded-br-full">
        <div>
          <div className="text-gray-400">Mon</div>
          <span className="text-4xl font-semibold">10</span>
        </div>
        <div className="border border-gray-600 h-full"></div>
        <div>
          <div className="font-thin">4 Donations</div>
          <span className="font-extralight text-gray-400">
            Total raised $250
          </span>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
