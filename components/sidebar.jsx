import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FileText, Menu, Monitor } from "react-feather";

export default function SideBar({ open, toggleSidebar }) {
  const Menus = [
    { title: "Logging", icon: <FileText />, ref: "/" },
    { title: "Monitoring", icon: <Monitor />, ref: "/monitoring" },
  ];
  const router = useRouter();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-[99] flex-shrink-0  px-5 py-6 bg-[#1e2739] text-white transform transition-all duration-300 ${
        open ? "translate-x-0 w-64 " : " w-20 "
      }`}
    >
      <div className="">
        <button
          className="p-2 text-white rounded-md hover:text-white focus:outline-none block "
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className="pt-6">
          {Menus.map((menu, idx) => (
            <li
              key={idx}
              className={
                "mb-2 hover:text-white cursor-pointer px-3 py-3 rounded-md flex items-center" +
                (router.pathname == `${menu.ref}`
                  ? " bg-[#151b2b]"
                  : " hover:bg-[#151b2b]")
              }
              onClick={() => router.push(`${menu.ref}`)}
            >
              <p className="w-6 h-6">{menu.icon}</p>
              {open && (
                <p className="text-white inline-block font-semibold text-sm ml-3">
                  {menu.title}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
