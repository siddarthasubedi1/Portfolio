import { motion } from "framer-motion";
import HeroContent from "../../hero/HeroContent";
import HeroImage from "../../hero/HeroImage";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section relative overflow-hidden bg-gradient-primary"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-60" />

            {/* Green Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center">

                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="w-full"
                    >
                        <HeroContent />
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                        }}
                        className="mt-16 flex w-full justify-center lg:mt-20"
                    >
                        <div className="w-full max-w-6xl ">
                            <HeroImage />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;


