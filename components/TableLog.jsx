import React from "react";
import { useState } from "react";

const TableLog = () => {
  const data = [
    {
      dateTime: "24/07/2023, 21:06PM",
      healthcare: "RS Siloam Surabaya",
      dbName: "database1",
      tableName: "data_patient",
      recordId: "2468",
      createdAt: "25/05/23 09:30:00",
      status: "Success",
    },
    {
      dateTime: "23/07/2023, 21:06PM",
      healthcare: "RS Mayapada",
      dbName: "database2",
      tableName: "data_patient",
      recordId: "1357",
      createdAt: "25/05/23 09:30:00",
      status: "Success",
    },
    {
      dateTime: "22/07/2023, 21:06PM",
      healthcare: "RS Siloam Bandung",
      dbName: "database3",
      tableName: "data_patient",
      recordId: "7777",
      createdAt: "25/05/23 09:30:00",
      status: "Failed",
    },
    {
      dateTime: "21/07/2023, 21:06PM",
      healthcare: "RS Hasan Sadikin",
      dbName: "database4",
      tableName: "data_patient",
      recordId: "7777",
      createdAt: "25/05/23 09:30:00",
      status: "Success",
    },
    {
      dateTime: "21/07/2023, 21:06PM",
      healthcare: "RS Immanuel",
      dbName: "database5",
      tableName: "data_patient",
      recordId: "4512",
      createdAt: "25/05/23 09:30:00",
      status: "Failed",
    },
    {
      dateTime: "21/07/2023, 21:06PM",
      healthcare: "RS Edelweiss",
      dbName: "database6",
      tableName: "data_patient",
      recordId: "1764",
      createdAt: "25/05/23 09:30:00",
      status: "Failed",
    },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto overflow-y-auto min-h-[20rem]">
        <table
          className="w-full border-collapse table-auto  text-left text-gray-800 rounded-lg"
          id="data-table"
        >
          <thead className="text-[15.3px] text-[#333543] border-b border-t border-gray-300">
            <tr>
              <th scope="col" className="px-4 py-2 ">
                Date & Time &#x2193;
              </th>
              <th scope="col" className="px-4 py-2">
                Healthcare
              </th>
              <th scope="col" className="px-4 py-2">
                DB Name
              </th>
              <th scope="col" className="px-4 py-2">
                Table Name
              </th>
              <th scope="col" className="px-4 py-2">
                Record ID
              </th>
              <th scope="col" className="px-4 py-2">
                Created_At
              </th>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-red-500 sm:text-[12px]">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-[#fff] border-b border-gray-300 font-medium text-gray-900 whitespace-nowrap"
              >
                <td className="px-4 py-3">{item.dateTime}</td>
                <td className="px-4 py-3 text-[#2ED4BF] font-bold">
                  {item.healthcare}
                </td>
                <td className="px-4 py-3">{item.dbName}</td>
                <td className="px-4 py-3">{item.tableName}</td>
                <td className="px-4 py-3">{item.recordId}</td>
                <td className="px-4 py-3">{item.createdAt}</td>
                <td className="px-4 font-bold py-3">
                  <div
                    className={`${
                      item.status === "Success"
                        ? "bg-[#2ED4BF] text-center w-[4.7rem] px-2 py-[0.17rem] rounded-full text-white"
                        : "bg-red-500  text-center w-[4.7rem] px-2 py-[0.17rem] rounded-full text-white"
                    }`}
                  >
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center md:justify-center mt-8">
        {/* Tombol Previous */}
        <button className="relative hover:bg-[#2ED4BF] hover:text-white  rounded-md ml-2 z-10 text-[#2ED4BF] inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          Previous
        </button>
        {/* Tombol halaman */}
        <button className="relative text-white bg-[#2ED4BF] rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          1
        </button>
        <button className="relative text-[#2ED4BF] hover:bg-[#2ED4BF] hover:text-white rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          2
        </button>
        <button className="relative text-[#2ED4BF] hover:bg-[#2ED4BF] hover:text-white  rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          ...
        </button>
        <button className="relative text-[#2ED4BF] hover:bg-[#2ED4BF] hover:text-white  rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          6
        </button>
        <button className="relative text-[#2ED4BF] hover:bg-[#2ED4BF] hover:text-white  rounded-md ml-2 z-10 inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          7
        </button>
        {/* Tombol Next */}
        <button className="relative hover:bg-[#2ED4BF] hover:text-white  rounded-md ml-2 z-10 text-[#2ED4BF] inline-flex items-center border border-[#2ED4BF] px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ED4BF]">
          Next
        </button>
      </div>
    </div>
  );
};

export default TableLog;
