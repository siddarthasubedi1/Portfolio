import HeroContent from "../../hero/HeroContent";
import HeroImage from "../../hero/HeroImage";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section hero-gradient relative overflow-hidden"
        >
            <div className="container-custom relative">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />
                    <HeroImage />
                </div>
            </div>
        </section>
    );
};

export default Hero;