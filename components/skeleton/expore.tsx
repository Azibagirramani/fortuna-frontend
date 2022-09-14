const ExploreSkeleton = () => {
  return (
    <div
      role="status"
      className="mx-10 w-full bg-white space-y-4 rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      {Array.from(Array(20).keys()).map((_item, index) => {
        return (
          <div className="flex justify-between items-center mx-10" key={index}>
            <div className="">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ExploreSkeleton;
