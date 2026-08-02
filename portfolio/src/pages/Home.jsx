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

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;