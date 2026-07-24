import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import ScrollTop from "../components/layout/ScrollTop";

import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import WhyHireMe from "../components/sections/WhyHireMe";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";


function Home() {
    return (
        <>
            <ScrollProgress />

            <Navbar />

            <main>
                <Hero />

                <Projects />



                <WhyHireMe />

                <About />

                <Education />

                <Certificates />

                <Contact />

                <ScrollTop />
            </main>

            <Footer />
        </>
    );
}

export default Home;