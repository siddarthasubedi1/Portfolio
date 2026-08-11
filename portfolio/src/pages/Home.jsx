import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import ScrollTop from "../components/layout/ScrollTop";

import Hero from "../components/sections/Hero";
import FeaturedProject from "../components/sections/FeaturedProject";
import WhyHireMe from "../components/sections/WhyHireMe";
import About from "../components/sections/About";
import WhatIBuild from "../components/sections/WhatIBuild";
import MyJourney from "../components/sections/MyJourney";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";

const Home = () => {
    return (
        <>
            <ScrollProgress />

            <Navbar />

            <main>
                {/* Hero */}
                <Hero />

                {/* Featured Project */}
                <FeaturedProject />

                {/* Why Hire Me */}
                <WhyHireMe />

                {/* About */}
                <About />

                {/* What I Build */}
                <WhatIBuild />

                {/* Journey */}
                <MyJourney />

                {/* All Projects */}
                <Projects />

                {/* Skills */}
                <Skills />

                {/* Certificates & Learning */}
                <Certificates />

                {/* Contact */}
                <Contact />
            </main>


            <Footer />
            <ScrollTop />
        </>
    );
};

export default Home;