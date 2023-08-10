import React from "react";
import TableData from "@/components/TableData";
import Searchbar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

const MonitoringPage = () => {
  const [monitor, setMonitor] = useState([]);
  const [filteredMonitor, setFilteredMonitor] = useState([]);

  const fetchMonitor = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/monitor");
      setMonitor(response.data);
      setFilteredMonitor(response.data);
    } catch (err) {
      console.error("Error fetching data monitor:", err);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = monitor.filter((monitors) =>
      monitors.tableName.toLowerCase().includes(searchTerm)
    );
    setFilteredMonitor(filtered);
  };

  useEffect(() => {
    fetchMonitor();
  }, []);
  return (
    <div className="min-h-screen bg-[#fff] rounded-md drop-shadow-lg flex flex-col px-10">
      <h1 className="px-6 pt-10 text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-6 text-[#333543]">
        CDC <span className="text-[#2ED4BF]">Monitoring</span>
      </h1>
      <div className="w-full flex justify-center sm:justify-end">
        <div className="w-84 px-10">
          <Searchbar handleSearch={handleSearch} />
        </div>
      </div>
      <TableData className="flex-grow" data={filteredMonitor} />
    </div>
  );
};

export default MonitoringPage;
