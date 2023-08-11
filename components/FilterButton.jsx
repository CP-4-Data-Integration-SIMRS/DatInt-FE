import React from "react";
import { useState, useEffect, useRef } from "react";

const FilterButton = ({ logs, setFilteredLogs, setActiveFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["All", "Status Success", "Status Failed"];
  const [selectedCategory, setSelectedCategory] = useState("Filter");
  const dropdownRef = useRef(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);

    if (category === "All") {
      setFilteredLogs(logs);
      setActiveFilter("All");
    } else if (category === "Status Success") {
      const filtered = logs.filter((log) => log.status === "Success");
      setFilteredLogs(filtered);
      setActiveFilter("Success");
    } else if (category === "Status Failed") {
      const filtered = logs.filter((log) => log.status === "Failed");
      setFilteredLogs(filtered);
      setActiveFilter("Failed");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left z-10" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="px-4 sm:px-5 py-2 font-semibold ml-4 bg-[#2ED4BF] h-10 sm:mr-0 flex rounded-full hover:bg-[#26c4af] focus:outline-none"
          id="category-dropdown"
          onClick={handleToggle}
        >
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
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[10rem] rounded-md shadow-xl bg-[#fff] ring-1 ring-black ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="category-dropdown"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`block w-full text-left px-4 my-2 py-2 text-sm ${
                  selectedCategory === category
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                } text-gray-700`}
                role="menuitem"
                onClick={() => handleSelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
