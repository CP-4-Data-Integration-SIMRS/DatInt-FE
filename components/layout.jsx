import SideBar from "./sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex gap-x-4">
      <SideBar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="min-h-screen w-full bg-[#fff] rounded-md drop-shadow-lg flex">
        {children}
      </div>
    </div>
  );
}
