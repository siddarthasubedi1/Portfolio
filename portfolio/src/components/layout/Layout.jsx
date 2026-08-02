import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ScrollTop from "./ScrollTop";

const NAV_OFFSET = 96;

const Layout = () => {
    const location = useLocation();

    const scrollToHash = (hash) => {
        if (!hash) return;

        const el = document.querySelector(hash);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
    };

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

    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;

            const hash = a.getAttribute("href");
            if (!hash || hash === "#") return;

            const target = document.querySelector(hash);
            if (!target) return;

            e.preventDefault();
            window.history.pushState(null, "", hash);
            scrollToHash(hash);
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />

            <main className="min-h-screen pt-20 overflow-x-hidden">
                <Outlet />
            </main>

            <Footer />
            <ScrollTop />
        </>
    );
};

export default Layout;