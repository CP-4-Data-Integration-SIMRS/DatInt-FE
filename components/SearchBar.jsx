import React from "react";
import { useState } from "react";
import { Search } from "react-feather";

const Searchbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className="w-full relative">
      <div className="absolute top-[50%] transform translate-y-[-50%] left-4 text-gray-400">
        <Search
          className={`h-5 w-5 ${isInputFocused ? "text-[#2ED4BF]" : ""}`}
        />
      </div>
      <input
        type="text"
        className="w-full sm:flex-1 px-12 py-2 placeholder-gray-400 bg-[#fff] rounded-full font-medium border border-gray-400 focus:outline-none focus:ring-[#2ED4BF] text-gray-950 focus:border-[#2ED4BF]"
        placeholder="Search..."
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </div>
  );
};

export default Searchbar;
