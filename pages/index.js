import FilterButton from '@/components/FilterButton';
import SearchBar from '@/components/SearchBar';
import TableLog from '@/components/TableLog';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '@/components/sidebar';
import Searchbar from '@/components/SearchBar';

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const itemsPerPage = 10;

  const [isLoading, setIsLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      setIsLoading(true);
      const encodedSearchTerm = encodeURIComponent(searchTerm);

      const response = await axios.get('http://localhost:3030/api/v1/logs', {
        params: { Search: encodedSearchTerm, Filter: activeFilter },
      });
      setLogs(response.data.data);
      setFilteredLogs(response.data.data);
    } catch (err) {
      console.error('Error fetching data monitor:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    console.log('Debounce started');
    const newDebounceTimeout = setTimeout(() => {
      console.log('Debounce finished');
      fetchLogs();
    }, 500);
    setDebounceTimeout(newDebounceTimeout);
  }, [searchTerm, activeFilter]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentLogs = filteredLogs ? filteredLogs.slice(firstIndex, lastIndex) : [];
  const totalPages = filteredLogs ? Math.ceil(filteredLogs.length / itemsPerPage) : 0;

  return (
    <div>
      <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`px-6 pb-6 pt-4 ${isSidebarOpen ? 'lg:ml-64' : 'ml-20'}`}>
        <div className="flex flex-col">
          <div className=" mt-3   bg-[#fff] min-h-screen ">
            <h1 className="px-6 pt-10 text-3xl font-bold ml-[1.8rem] sm:ml-[2.8rem] mb-8 text-[#333543]">
              Activity <span className="text-[#2ED4BF]">Log</span>
            </h1>
            <div className="mb-8 flex flex-row items-start sm:items-center px-6 sm:px-10">
              <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />
              <FilterButton setActiveFilter={setActiveFilter} setCurrentPage={setCurrentPage} />
            </div>
            <TableLog data={currentLogs} currentPage={currentPage} loading={isLoading} totalPages={totalPages} goToPage={goToPage} />
          </div>
        </div>
      </main>
    </div>
  );
}
