import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import FeaturedProject from "../components/sections/FeaturedProject";
import WhatIBuild from "../components/sections/WhatIBuild";
import Projects from "../components/sections/Projects";
import MyJourney from "../components/sections/MyJourney";
import Certificates from "../components/sections/Certificates";
import LetsBuildTogether from "../components/sections/LetsBuildTogether";
import Contact from "../components/sections/Contact";
import ScrollProgress from "../components/layout/ScrollProgress";
import ScrollTop from "../components/layout/ScrollTop";

const NAV_OFFSET = 96; // navbar height (80) + small gap

const Home = () => {
    // Fix: /#contact on refresh + clicking navbar hash links (with fixed navbar offset)
    useEffect(() => {
        const scrollWithOffset = () => {
            const hash = window.location.hash;
            if (!hash) return;

            const el = document.querySelector(hash);
            if (!el) return;

            const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
        };

        // run once on first load (important for refresh with /#contact)
        setTimeout(scrollWithOffset, 0);
        setTimeout(scrollWithOffset, 100);
        setTimeout(scrollWithOffset, 300);

        // run on every hash change (clicking navbar items)
        window.addEventListener("hashchange", scrollWithOffset);
        return () => window.removeEventListener("hashchange", scrollWithOffset);
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />

            {/* IMPORTANT: push content below fixed navbar */}
            <main className="overflow-x-hidden pt-20">
                <Hero />
                <About />
                <Skills />
                <FeaturedProject />
                <WhatIBuild />
                <Projects />
                <MyJourney />
                <Certificates />
                <LetsBuildTogether />
                <Contact />
            </main>

            <ScrollTop />
            <Footer />
        </>
    );
};

export default Home;