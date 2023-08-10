import FilterButton from "@/components/FilterButton";
import Searchbar from "@/components/SearchBar";
import TableLog from "@/components/TableLog";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/log");
      setLogs(response.data);
    } catch (err) {
      console.error("Error fetching logs:", err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#fff] rounded-md drop-shadow-lg flex flex-col px-10 mt-1 py-10">
      <h1 className="text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-6 text-[#333543]">
        Activity Log
      </h1>
      <div className="mb-8 flex flex-row items-start sm:items-center px-6 sm:px-10">
        <Searchbar />
        <FilterButton />
      </div>
      <TableLog data={logs} />
    </div>
  );
}
