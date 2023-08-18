import React from "react";
import TableData from "@/components/TableData";
import Searchbar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "@/components/sidebar";

const MonitoringPage = () => {
  const [monitor, setMonitor] = useState([]);
  const [filteredMonitor, setFilteredMonitor] = useState([]);
  const [selectedDbname, setSelectedDbname] = useState("rs_mitra");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMonitor = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/monitor");
      setMonitor(response.data);

      const filtered = response.data.filter(
        (monitors) => monitors.dbname === selectedDbname
      );
      setFilteredMonitor(filtered);
    } catch (err) {
      console.error("Error fetching data monitor:", err);
    }
  };

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm); // Update the search term state

    const filtered = monitor
      .filter((item) => item.dbname === selectedDbname)
      .map((item) => ({
        ...item,
        tableInfo: item.tableInfo.filter((table) =>
          table.tableName.toLowerCase().includes(newSearchTerm)
        ),
      }))
      .filter((item) => item.tableInfo.length > 0);

    setFilteredMonitor(filtered);
  };

  useEffect(() => {
    fetchMonitor();
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleDbnameChange = (event) => {
    const newSelectedDbname = event.target.value;
    setSelectedDbname(newSelectedDbname);

    const filtered = monitor
      .filter((item) => item.dbname === newSelectedDbname)
      .map((item) => ({
        ...item,
        tableInfo: item.tableInfo.filter(
          (table) => table.tableName.toLowerCase().includes(searchTerm) // Using the searchTerm state here
        ),
      }))
      .filter((item) => item.tableInfo.length > 0);

    setFilteredMonitor(filtered);
  };
  return (
    <div>
      <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`px-6 pb-6 pt-4 ${isSidebarOpen ? "lg:ml-64" : "ml-20"}`}
      >
        <div className="flex flex-col">
          <div className=" mt-3   bg-[#fff] min-h-screen  ">
            <h1 className="px-6 pt-10 font-bold  sm:ml-[2.8rem] text-2xl sm:text-3xl  mb-8 text-[#333543]">
              CDC <span className="text-[#2ED4BF]">Monitoring</span>
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
              <div className="sm:w-84 sm:px-10 mb-6 sm:mb-0 flex items-center">
                <select
                  id="dbnameSelect"
                  className=" px-5 w-full py-2 placeholder-gray-400 bg-[#fff] rounded-xl font-medium border border-gray-400 focus:outline-none focus:ring-[#2ED4BF] text-gray-950 focus:border-[#2ED4BF]"
                  value={selectedDbname}
                  onChange={handleDbnameChange}
                >
                  <option value="rs_mitra">RS Mitra</option>
                  <option value="rs_edelweiss">RS Edelweiss</option>
                  {/* Add other dbname options here */}
                </select>
              </div>
              <div className="sm:w-84 sm:px-10">
                <Searchbar handleSearch={handleSearch} />
              </div>
            </div>
            <TableData className="flex-grow" data={filteredMonitor} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonitoringPage;
