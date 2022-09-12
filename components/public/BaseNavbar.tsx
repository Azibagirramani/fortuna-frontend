const BaseNavBar = () => {
  return (
    <nav className="transition-all duration-700 fixed w-full z-20 top-0 left-0 border-b bg-white">
      <div className="mx-5 md:mx-20 xl:mx-72 flex flex-wrap justify-between items-center py-4">
        <a href="#" className="flex items-center hover:text-subSecondary">
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white hover:text-subSecondary">
            Fort<span className="text-blue-primary">una</span>
          </span>
        </a>
        <button className="w-fit h-fit bg-blue-primary text-white px-5 py-2.5 rounded hover:cursor-pointer">
          Coming soon
        </button>
      </div>
    </nav>
  );
};

export default BaseNavBar;
