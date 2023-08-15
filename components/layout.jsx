import SideBar from "./sidebar";

export default function Layout ({children}) {
    return (
        <div className="flex gap-x-4">
            <SideBar />
            {children}
        </div>
    )
}