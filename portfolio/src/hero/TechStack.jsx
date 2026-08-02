import { motion } from "framer-motion";
import heroData from "../constants/heroData";

const TechStack = () => {
    return (
        <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Technologies I Use
            </h3>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroData.technologies.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08 }}
                            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm hover:shadow-md transition"
                        >
                            <Icon size={20} className={tech.color} />
                            <span className="text-sm font-semibold text-slate-700">
                                {tech.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStack;