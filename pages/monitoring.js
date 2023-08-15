import React from "react";
import TableData from "@/components/TableData";
import Searchbar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/layout";
import SideBar from "@/components/sidebar";

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

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen bg-[#fff] rounded-md drop-shadow-lg flex">
      <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`px-6 pb-6 pt-4 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0 pl-24"
        } flex-grow`}
      >
        <h1 className="px-6 pt-10 text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-8 text-[#333543]">
          CDC <span className="text-[#2ED4BF]">Monitoring</span>
        </h1>
        <div className="w-full flex justify-center sm:justify-end">
          <div className="w-84 px-10">
            <Searchbar handleSearch={handleSearch} />
          </div>
        </div>
        <TableData className="flex-grow" data={filteredMonitor} />
      </main>
    </div>
  );
};

export default MonitoringPage;
