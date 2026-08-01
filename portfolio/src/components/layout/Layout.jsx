import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ScrollTop from "./ScrollTop";

const Layout = () => {
    return (
        <>
            <ScrollProgress />

            <Navbar />

            <main className="overflow-hidden bg-white">
                <Outlet />
            </main>

            <Footer />

            <ScrollTop />
        </>
    );
};

export default Layout;