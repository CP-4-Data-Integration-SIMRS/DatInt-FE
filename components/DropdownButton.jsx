import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'react-feather';

const DropdownButton = ({ databases, selectedDbname, setSelectedDbname, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (database) => {
    setSelectedDbname(database);
    setCurrentPage(1);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block w-full md:w-auto text-left" ref={dropdownRef}>
      <div className="w-full md:w-44">
        <span className="rounded-md shadow-sm" onClick={toggleDropdown}>
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-full border border-gray-400 px-5 py-2 bg-white text-gray-900 font-medium  focus:outline-none focus:border-[#2ED4BF]"
            id="dropdown-menu"
            aria-haspopup="true"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          >
            {selectedDbname}
            <ChevronDown className={`-mr-1 ml-2 h-5 w-5 ${isInputFocused ? 'text-[#2ED4BF]' : ''}`} aria-hidden="true" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 z-[99] sm:w-44 w-full rounded-lg shadow-xl">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
              {databases.map((database, index) => (
                <button
                  key={index}
                  className="block px-5 py-2 w-full text-sm text-start text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionSelect(database)}
                >
                  {database}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
