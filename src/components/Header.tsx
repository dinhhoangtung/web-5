const Header = () => {
  return (
    <header className="bg-white ">
      <div className="container mx-auto">
        <nav
          className="mx-auto flex max-w-7xl  p-12 lg:px-8 items-center"
          aria-label="Global"
        >
          <div className="items-center h-[126px] w-[688px] ">
            <img
              src="./images/logo/banner.png"
              alt=""
              className="h-[126px] w-[688px]"
            />
          </div>

          <div className="relative content-end flex items-center left-2 ">
            <input
              type="text"
              placeholder="Search this site..."
              className="p-2 pl-10 border border-gray-300 rounded-full focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 absolute right-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
