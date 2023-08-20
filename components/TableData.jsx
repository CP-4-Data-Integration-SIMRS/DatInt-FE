import { useState, useEffect } from 'react';
import React from 'react';
import ProgressBar from './ProgressBar';

const TableData = ({ data, currentPage, totalPages, goToPage, loading }) => {
  const generatePaginationButtons = () => {
    const maxVisibleButtons = 5;
    const buttons = [];

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(maxVisibleButtons / 2)) {
        for (let i = 1; i <= maxVisibleButtons - 1; i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxVisibleButtons / 2)) {
        buttons.push(1);
        buttons.push('...');
        for (let i = totalPages - maxVisibleButtons + 2; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else {
        buttons.push(1);
        buttons.push('...');
        for (let i = currentPage - Math.floor(maxVisibleButtons / 2); i <= currentPage + Math.floor(maxVisibleButtons / 2); i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      }
    }

    return buttons;
  };

  return (
    <div>
      <div className="px-10 pb-6 mt-6 relative overflow-x-auto overflow-y-auto min-h-[20rem]">
        <table className="w-full my-5 border-collapse table-auto text-left text-gray-800 rounded-lg" id="table-data">
          <thead className="text-[15.3px] text-[#333543] border-b border-t border-gray-300">
            <tr>
              <th scope="col" className="px-4 py-2 min-w-[150px] lg:min-w-0">
                Table Name
              </th>
              <th scope="col" className="px-4 py-2 min-w-[138px] lg:min-w-0">
                Total Record
              </th>
              <th scope="col" className="px-4 py-2 min-w-[138px] lg:min-w-0">
                New Data
              </th>
              <th scope="col" className="px-4 py-2 min-w-[138px] lg:min-w-0">
                Delta Data
              </th>
              <th scope="col" className="px-4 py-2 min-w-[300px] lg:min-w-0">
                Progress Capturing
              </th>
            </tr>
          </thead>
          <tbody className="text-[13px]  sm:text-[12px]">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-3">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((table, index) => (
                <tr key={index} className="bg-[#fff] border-b border-gray-300 font-medium text-[#333543] whitespace-nowrap">
                  <td className="px-4 text-start py-3">{table.tableName}</td>
                  <td className="px-4 py-3">{table.totalRecord}</td>
                  <td className="px-4 py-3">{table.newData}</td>
                  <td className="px-4 py-3">{table.deltaData}</td>
                  <td className=" py-3">
                    <ProgressBar progress={parseFloat(table.currentCapured) / 2} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center md:justify-center mt-[1.4rem] mb-5">
        {currentPage > 1 && (
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="relative hover:bg-[#2ED4BF] pagination-button text-[#2ED4BF] hover:text-white rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]"
          >
            Previous
          </button>
        )}

        {generatePaginationButtons().map((button, index) => (
          <button
            key={index}
            onClick={() => {
              if (typeof button === 'number') {
                goToPage(button);
              }
            }}
            className={`relative ${
              currentPage === button // Compare with the actual page number
                ? 'text-white bg-[#2ED4BF] rounded-md ml-2 z-10'
                : 'text-[#2ED4BF] hover:bg-[#2ED4BF] hover:text-white rounded-md ml-2 z-10'
            } inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]`}
          >
            {button === '...' ? '...' : button}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="relative hover:bg-[#2ED4BF] hover:text-white rounded-md ml-2 z-10 text-[#2ED4BF] inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TableData;
