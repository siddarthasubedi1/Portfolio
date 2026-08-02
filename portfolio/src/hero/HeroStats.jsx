import { motion } from "framer-motion";
import heroData from "../constants/heroData";

const HeroStats = () => {
    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {heroData.stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-3xl font-black text-indigo-600">
                        {stat.number}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-slate-600">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default HeroStats;