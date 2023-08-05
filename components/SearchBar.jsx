import React from "react";
import { Search } from "react-feather";

const Searchbar = () => {
  return (
    <div className="w-full ">
      <div className="absolute top-[96.5px] pl-6 py-3 px-4 text-darker-t duration-200 z-10 rounded-md">
        <Search className="text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full sm:flex-1 px-4 py-2 pl-14 placeholder-gray-400 bg-[#fff] rounded-full font-medium border border-gray-400 focus:outline-none focus:ring-[#2ED4BF] text-gray-950 focus:border-[#2ED4BF]"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searchbar;
