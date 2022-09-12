const BaseFooter = () => {
  return (
    <footer className="flex justify-center mt-10">
      <div className="flex gap-4 text-base md:text-lg pb-8 text-gray-400 hover:text-gray-400">
        <a
          href="#"
          className="hover:text-subSecondary text-gray-light font-medium xl:text-lg"
        >
          Fortuna @2022
        </a>
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className="hover:text-subSecondary text-gray-light font-medium xl:text-lg"
            >
              fortuna
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default BaseFooter;
