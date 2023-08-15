import FilterButton from "@/components/FilterButton";
import Searchbar from "@/components/SearchBar";
import TableLog from "@/components/TableLog";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/layout";
import SideBar from "@/components/sidebar";

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentLogs = filteredLogs.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

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

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
    setCurrentPage(1); // Reset page to the first page after search
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          Activity <span className="text-[#2ED4BF]">Log</span>
        </h1>
        <div className="mb-8 flex flex-row items-start sm:items-center px-6 sm:px-10">
          <Searchbar handleSearch={handleSearch} />
          <FilterButton
            setFilteredLogs={setFilteredLogs}
            logs={logs}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <TableLog
          data={currentLogs}
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </main>
    </div>
  );
}
