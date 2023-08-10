import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TableData = ({ data }) => {
  return (
    <div>
      <div className="px-10 pb-6 mt-6 relative overflow-x-auto overflow-y-auto min-h-[20rem]">
        <table
          className="w-full my-5 border-collapse table-auto text-center text-gray-800 rounded-lg"
          id="table-data"
        >
          <thead className="text-[15.3px] text-[#333543] border-b border-t border-gray-300">
            <tr>
              <th scope="col" className="px-4 py-2 min-w-[138px] lg:min-w-0">
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
          <tbody className="text-[13px] text-red-500 sm:text-[12px]">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-[#fff] border-b border-gray-300 font-medium text-[#333543] whitespace-nowrap"
              >
                <td className="px-4 py-3">{item.tableName}</td>
                <td className="px-4 py-3">{item.totalRecord}</td>
                <td className="px-4 py-3">{item.newData}</td>
                <td className="px-4 py-3">{item.deltaData}</td>
                <td className="px-10 py-3">
                  <ProgressBar progress={parseFloat(item.progressCapt)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
