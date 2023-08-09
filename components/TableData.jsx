import React from "react";
import { useState } from "react";

const TableData = () => {
  const data = [
    {
      tableName: "data_patient",
      totalRecord: "10000",
      newData: "4000",
      deltaData: "4000",
      progressCapt: "75%",
    },
    {
      tableName: "data_patient",
      totalRecord: "4000",
      newData: "4000",
      deltaData: "4000",
      progressCapt: "90%",
    },
    {
      tableName: "data_patient",
      totalRecord: "2500",
      newData: "4000",
      deltaData: "4000",
      progressCapt: "25%",
    },
    {
      tableName: "data_patient",
      totalRecord: "5000",
      newData: "8000",
      deltaData: "8000",
      progressCapt: "50%",
    },
    {
      tableName: "data_patient",
      totalRecord: "8000",
      newData: "2500",
      deltaData: "2500",
      progressCapt: "70%",
    },
    {
      tableName: "data_patient",
      totalRecord: "4000",
      newData: "600",
      deltaData: "600",
      progressCapt: "50%",
    },
  ];
  return (
    <div>
      <div className="px-10 pb-6 pt-4 relative overflow-x-auto overflow-y-auto min-h-[20rem]">
        <table
          className="w-full my-5 border-collapse table-auto text-center text-gray-800 rounded-lg"
          id="table-data"
        >
          <thead className="bg-white text-[15.3px] text-[#333543] border-b border-t border-gray-300">
            <tr>
              <th scope="col" className="px-4 py-2">
                Table Name
              </th>
              <th scope="col" className="px-4 py-2">
                Total Record
              </th>
              <th scope="col" className="px-4 py-2">
                New Data
              </th>
              <th scope="col" className="px-4 py-2">
                Delta Data
              </th>
              <th scope="col" className="px-4 py-2">
                Progress Capturing
              </th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-red-500 sm:text-[12px]">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-[#fff] border-b border-gray-300 font-medium text-gray-900 whitespace-nowrap"
              >
                <td className="px-4 py-3">{item.tableName}</td>
                <td className="px-4 py-3">{item.totalRecord}</td>
                <td className="px-4 py-3">{item.newData}</td>
                <td className="px-4 py-3">{item.deltaData}</td>
                <td className="px-4 py-3">{item.progressCapt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
