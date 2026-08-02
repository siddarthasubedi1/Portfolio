import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ScrollTop from "./ScrollTop";

const NAV_OFFSET = 96; // navbar height + small gap (h-20 = 80px)

const Layout = () => {
    const location = useLocation();

    const scrollToHash = (hash) => {
        if (!hash) return;

        const el = document.querySelector(hash);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
    };

    // 1) Handle refresh/open like /#contact AFTER components render
    useEffect(() => {
        if (!location.hash) return;

        const t1 = setTimeout(() => scrollToHash(location.hash), 0);
        const t2 = setTimeout(() => scrollToHash(location.hash), 100);
        const t3 = setTimeout(() => scrollToHash(location.hash), 300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [location.hash]);

    // 2) Handle clicking any <a href="#..."> without editing Navbar.jsx
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;

            const hash = a.getAttribute("href");
            if (!hash || hash === "#") return;

            const target = document.querySelector(hash);
            if (!target) return;

            e.preventDefault();

            // update URL hash
            window.history.pushState(null, "", hash);

            // scroll with offset
            scrollToHash(hash);
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />

            {/* Push content below fixed navbar */}
            <main className="min-h-screen pt-20">
                <Outlet />
            </main>

            <Footer />
            <ScrollTop />
        </>
    );
};

export default Layout;



