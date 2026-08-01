import HeroContent from "../../hero/HeroContent";
import HeroImage from "../../hero/HeroImage";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-32 pb-24"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                <HeroContent />

                <HeroImage />

            </div>
        </section>
    );
};

export default Hero;