import { motion } from "framer-motion";
import heroData from "../constants/heroData";

const HeroStats = () => {
    return (
        <section className="mt-20">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                {heroData.stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.12,
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                        }}
                        className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-green-100
              bg-white
              p-7
              text-center
              shadow-md
              transition-all
              duration-300
              hover:border-green-300
              hover:shadow-xl
            "
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                        <div className="relative z-10">

                            <h3 className="text-4xl font-black text-green-600 md:text-5xl">
                                {stat.number}
                            </h3>

                            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                {stat.label}
                            </p>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default HeroStats;