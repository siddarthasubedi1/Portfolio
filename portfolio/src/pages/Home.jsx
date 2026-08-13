import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import ScrollTop from "../components/layout/ScrollTop";

import Hero from "../components/sections/Hero";
import FeaturedProject from "../components/sections/FeaturedProject";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import WhatIBuild from "../components/sections/WhatIBuild";
import MyJourney from "../components/sections/MyJourney";
import Certificates from "../components/sections/Certificates";
import WhyHireMe from "../components/sections/WhyHireMe";
import Contact from "../components/sections/Contact";

const Home = () => {
    return (
        <>
            <ScrollProgress />

            <Navbar />

            <main className="w-full overflow-x-hidden">
                <Hero />

                <FeaturedProject />

                <About />

                <Projects />

                <Skills />

                <WhatIBuild />

                <MyJourney />

                <Certificates />

                <WhyHireMe />

                <Contact />
            </main>

            <Footer />

            <ScrollTop />
        </>
    );
};

export default Home;