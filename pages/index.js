import FilterButton from "@/components/FilterButton";
import Searchbar from "@/components/SearchBar";
import TableLog from "@/components/TableLog";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const fetchLogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/log");
      setLogs(response.data);
      setFilteredLogs(response.data);
    } catch (err) {
      console.error("Error fetching logs:", err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    let filtered = logs;

    if (activeFilter !== "All") {
      filtered = logs.filter((log) => log.status === activeFilter);
    }

    filtered = filtered.filter(
      (log) =>
        log.healthcare.toLowerCase().includes(searchTerm) ||
        log.dbName.toLowerCase().includes(searchTerm) ||
        log.tableName.toLowerCase().includes(searchTerm)
    );

    setFilteredLogs(filtered);
  };

  return (
    <div className="min-h-screen bg-[#fff] rounded-md drop-shadow-lg flex flex-col px-10 mt-1 py-10">
      <h1 className="text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-6 text-[#333543]">
        Activity Log
      </h1>
      <div className="mb-8 flex flex-row items-start sm:items-center px-6 sm:px-10">
        <Searchbar handleSearch={handleSearch} />
        <FilterButton
          setFilteredLogs={setFilteredLogs}
          logs={logs}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <TableLog data={filteredLogs} />
    </div>
  );
}
