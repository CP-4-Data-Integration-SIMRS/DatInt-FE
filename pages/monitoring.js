import React from "react";
import Navbar from "@/components/NavBar";
import TableData from "@/components/TableData";
import Searchbar from "@/components/SearchBar";

const MonitoringPage = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <h1 className="px-6 pt-10 text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-6 text-[#333543]">
        CDC <span className="text-teal-400">Monitoring</span>
      </h1>
      <div className="w-full flex justify-end">
        <div className="w-84 px-8">
          <Searchbar />
        </div>
      </div>
      <div>
        <TableData />
      </div>
    </div>
  );
};

export default MonitoringPage;
