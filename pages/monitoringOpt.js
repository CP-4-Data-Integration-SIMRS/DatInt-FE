"use client"
import TableItem from '@/components/tableItem';
import { useState, useEffect } from 'react';
import SideBar from '@/components/sidebar';
import Searchbar from '@/components/SearchBar';
import axios from "axios";

export default function Monitoring() {
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
        <div className='flex min-h-screen bg-[#fff]'>
            <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={` w-full h-full rounded-md p-6 ${
                isSidebarOpen ? "lg:ml-64" : "ml-0 pl-24"}`}>
                <div className="flex justify-between">
                    <p className="text-3xl font-bold">FHIR  Adapter.</p>
                    <div className="flex">
                        <p className="font-bold text-4xl">CDC</p>
                        <p className="font-bold text-4xl text-title">Monitoring</p>
                    </div>
                    {/* <p>Worker A</p> */}
                    <div className="flex justify-around items-center w-48 h-11 border-2 rounded-9 border-worker hover:bg-slate-100">
                        <p className="font-bold text-worker">Worker A</p>
                        
                    </div>
                </div>
                
                <div className='flex justify-end w-full'>
                    <div className='w-84 h-68 my-9'>
                        <Searchbar handleSearch={handleSearch} />
                    </div>
                </div>

                <div className="h-full border-2 border-b-0 rounded-7 border-worker m-container">
                    {/* Headers  */}
                    <div className="grid grid-cols-6 text-center py-6 border-b-2 border-worker">
                        <div className='font-bold text-lg text-columnHead'>Table</div>
                        <div className='font-bold text-lg text-columnHead'>Total Record</div>

                        <div className='font-bold text-lg text-columnHead'>newData</div>
                        <div className='font-bold text-lg text-columnHead'>deltaData</div>

                        <div className='font-bold text-lg text-columnHead col-span-2'>Progress Capturing</div>
                    </div>
                    {/* Component Data per table */}
                    {filteredMonitor.map((data, index) => {
                        return (
                            <TableItem key={index}
                            {...data}
                            />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}