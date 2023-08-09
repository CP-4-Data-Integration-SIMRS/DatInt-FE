import React from "react";
import Navbar from "@/components/NavBar";
import TableData from "@/components/TableData";
import Searchbar from "@/components/SearchBar";

const MonitoringPage = () => {
  return (
    <div className="min-h-screen bg-[#fff] rounded-md drop-shadow-lg flex flex-col px-10">
      {/* <Navbar /> */}
      <h1 className="px-6 pt-10 text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-6 text-[#333543]">
        CDC <span className="text-[#2ED4BF]">Monitoring</span>
      </h1>
      <div className="w-full flex justify-center sm:justify-end">
        <div className="w-84 px-10">
          <Searchbar />
        </div>
      </div>
      <TableData className="flex-grow" />
    </div>
  );
};

export default MonitoringPage;
