import HeroContent from "../../hero/HeroContent";
import HeroImage from "../../hero/HeroImage";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-indigo-200/40 blur-3xl"></div>

            <div className="container-custom text-center relative z-10">
                <HeroContent />

                <div className="mt-20 flex justify-center">
                    <HeroImage />
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 w-full border-t border-slate-200"></div>
        </section>
    );
};

export default Hero;