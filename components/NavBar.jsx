import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 top-0 w-[100%] z-20">
      <div className="container justify-between mx-auto flex items-center px-4 py-4">
        <div className="text-2xl font-bold">
          <h1 className="italic">SIMRS</h1>
        </div>
        <div className="font-bold tracking-wider">
          <h1 className="text-2xl">Monitoring</h1>
        </div>
        <Link href="/login" className="hover:text-white hover:underline">
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
