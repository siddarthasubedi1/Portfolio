import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Navbar />

            {/* This pushes content below navbar */}
            <div className="h-20"></div>

            <main className="min-h-screen bg-white">
                <Outlet />
            </main>


        </>
    );
};

export default Layout;