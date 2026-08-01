import { motion } from "framer-motion";
import profile from "../constants/profile";
import heroData from "../constants/heroData";

const TechStack = () => {
    return (
        <div className="pt-8">
            <h3 className="mb-6 text-lg font-bold text-slate-800">
                Technologies I Use
            </h3>

            <div className="flex flex-wrap gap-4">
                {heroData.technologies.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={tech.name}
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.08,
                            }}
                            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-md transition-all hover:border-indigo-300 hover:shadow-xl"
                        >
                            <Icon
                                size={22}
                                className={tech.color}
                            />

                            <span className="font-semibold text-slate-700">
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