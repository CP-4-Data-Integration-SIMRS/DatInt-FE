import React from "react";

const FilterButton = () => {
  return (
    <button className="px-4 sm:px-5 py-2 font-semibold ml-4 bg-[#2ED4BF] h-10 sm:mr-0 flex rounded-full hover:bg-[#26c4af] focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-white sm:mr-2"
        id="filter-list"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path
          fill="currentColor"
          d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
        ></path>
      </svg>{" "}
      <p className=" text-white text-md sm:flex hidden">Filter</p>
    </button>
  );
};

export default FilterButton;
