import HeroContent from "../../hero/HeroContent";
import HeroImage from "../../hero/HeroImage";
import HeroStats from "../../hero/HeroStats";
import TechStack from "../../hero/TechStack";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative section bg-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_50%)]"></div>

            <div className="container-custom text-center">

                <HeroContent />

                {/* Image */}
                <div className="mt-20 flex justify-center">
                    <HeroImage />
                </div>

                {/* Stats */}
                <div className="mt-20">
                    <HeroStats />
                </div>

                {/* Tech Stack */}
                <div className="mt-16">
                    <TechStack />
                </div>

            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full border-t border-slate-200"></div>
        </section>
    );
};

export default Hero;