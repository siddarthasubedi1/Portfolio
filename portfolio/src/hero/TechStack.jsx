import { motion } from "framer-motion";
import heroData from "../constants/heroData";

const TechStack = () => {
    return (
        <section className="mt-24">

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    My Technology Stack
                </span>

                <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-5xl">
                    Technologies I Use
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    I build modern, scalable and responsive web applications using
                    industry-standard technologies and best development practices.
                </p>
            </motion.div>

            {/* Tech Grid */}
            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">

                {heroData.technologies.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.45,
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                            }}
                            className="
                group
                rounded-3xl
                border
                border-green-100
                bg-white
                p-6
                text-center
                shadow-md
                transition-all
                duration-300
                hover:border-green-300
                hover:shadow-xl
              "
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-500">

                                <Icon
                                    size={32}
                                    className={`${tech.color} transition-all duration-300 group-hover:text-white`}
                                />

                            </div>

                            <h3 className="mt-5 text-base font-bold text-slate-900">
                                {tech.name}
                            </h3>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
};

export default TechStack;