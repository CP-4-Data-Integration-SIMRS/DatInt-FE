import Link from "next/link";
import { useState } from "react"
import { FileText, Menu, Monitor } from "react-feather";

export default function SideBar() {
    const [open, setOpen] = useState(true);
    console.log(open);
    const Menus = [
        { title: "Log", icon : <FileText />, ref : '/' },
        { title: "Monitoring", icon :  <Monitor />, ref : '/monitoring' },
      ];

    return (
        <div className={`${open ? 'w-72' : 'w-20'} bg-slate-800 p-5 duration-300 block`}>
            <Menu 
                className={`${open ? 'right-3 top-9 ' : ''} cursor-pointe w-7 bg-slate-50 hover:bg-teal-400 hover:text-white self-center rounded-md cursor-pointer`} 
                onClick={() => setOpen(!open)}
            />

            <ul className="pt-6">
                {open ? Menus.map((menu, idx) => {
                    return (
                        <Link key={idx} href={`${menu.ref}`}>
                            <li key={idx}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 bg-slate-400 mb-2 hover:text-black text-[#fff] text-sm items-center gap-x-4 
                                ${idx === 0 && "bg-light-white"}`}
                            >
                                {menu.icon}
                                {menu.title}
                            </li>
                        </Link>
                    )
                }) : <>
                        {Menus.map((menu, idx) => {
                            return (
                                <li key={idx} className="hover:bg-slate-200 rounded-md bg-slate-400 mb-2 p-2 hover:text-black text-[#fff] items-center">
                                    <Link href={`${menu.ref}`}>{menu.icon}</Link>
                                </li>
                            )
                        })}
                    </>
                }
            </ul>
        </div>
    )
}