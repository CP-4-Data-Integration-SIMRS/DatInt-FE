import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableData from '@/components/TableData';
import SideBar from '@/components/sidebar';
import Searchbar from '@/components/SearchBar';
import DropdownButton from '@/components/DropdownButton';

const MonitoringPage = () => {
  const [selectedDbname, setSelectedDbname] = useState('rs_advent');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [databases, setDatabases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMonitor, setFilteredMonitor] = useState([]);

  const fetchMonitor = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://simrs-cdc-monitoring-production.up.railway.app/api/v1/monitor', {
        params: { dbname: selectedDbname },
      });
      const responseData = response.data.data;

      setFilteredMonitor(responseData.tableInfo);
    } catch (err) {
      console.error('Error fetching data monitor:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMonitor();
  }, [selectedDbname, searchTerm]);

  useEffect(() => {
    axios
      .get('https://simrs-cdc-monitoring-production.up.railway.app/api/v1/monitor')
      .then((response) => {
        setDatabases(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const filteredLogs = filteredMonitor.filter((log) => {
  //   return log.tableName.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const currentLogs = filteredMonitor.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMonitor.length / itemsPerPage);

  return (
    <div>
      <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`px-6 pb-6 pt-4 ${isSidebarOpen ? 'lg:ml-64' : 'ml-20'}`}>
        <div className="flex flex-col">
          <div className=" mt-3   bg-[#fff] min-h-screen  ">
            <h1 className="px-6 pt-10 font-bold  sm:ml-[2.8rem] text-3xl  mb-8 text-[#333543]">
              CDC <span className="text-[#2ED4BF]">Monitoring</span>
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
              <div className="sm:w-84 sm:px-10 mb-6 md:mb-0 flex items-center">
                <DropdownButton databases={databases} selectedDbname={selectedDbname} setSelectedDbname={setSelectedDbname} setCurrentPage={setCurrentPage} />
              </div>
              <div className="sm:w-84 sm:px-10">
                <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />
              </div>
            </div>
            <TableData data={currentLogs} loading={isLoading} currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonitoringPage;
