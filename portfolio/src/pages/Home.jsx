import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import FeaturedProject from "../components/sections/FeaturedProject";
import WhatIBuild from "../components/sections/WhatIBuild";
import Projects from "../components/sections/Projects";
import MyJourney from "../components/sections/MyJourney";
import LetsBuildTogether from "../components/sections/LetsBuildTogether";
import Contact from "../components/sections/Contact";

import ScrollProgress from "../components/layout/ScrollProgress";
import ScrollTop from "../components/layout/ScrollTop";

const Home = () => {
    return (
        <>
            {/* Progress Bar */}

            <ScrollProgress />

            {/* Navigation */}

            <Navbar />

            {/* Main */}

            <main className="overflow-x-hidden">
                {/* Hero */}

                <Hero />

                {/* Featured Project */}

                <FeaturedProject />

                {/* What I Build */}

                <WhatIBuild />

                {/* Other Projects */}

                <Projects />

                {/* My Journey */}

                <MyJourney />

                {/* Internship Opportunities */}

                <LetsBuildTogether />

                {/* Contact */}

                <Contact />
            </main>

            {/* Scroll To Top */}

            <ScrollTop />

            {/* Footer */}

            <Footer />
        </>
    );
};

export default Home;