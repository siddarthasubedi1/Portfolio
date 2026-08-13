import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />

            {/* Pushes page content below the fixed navbar */}
            <div className="h-20" />

            <main className="min-h-screen bg-white">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;