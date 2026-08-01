import { motion } from "framer-motion";

import {
    Rocket,
    ArrowRight,
    Download,
    Briefcase,
    Users,
    Code2,
    BookOpen,
    Lightbulb,
} from "lucide-react";

const opportunities = [
    {
        title: "Full Stack Developer Internship",
        icon: <Briefcase size={28} className="text-indigo-600" />,
    },

    {
        title: "Collaborative Projects",
        icon: <Users size={28} className="text-indigo-600" />,
    },

    {
        title: "Modern Web Development",
        icon: <Code2 size={28} className="text-indigo-600" />,
    },

    {
        title: "Continuous Learning",
        icon: <BookOpen size={28} className="text-indigo-600" />,
    },

    {
        title: "Problem Solving",
        icon: <Lightbulb size={28} className="text-indigo-600" />,
    },
];

const LetsBuildTogether = () => {
    return (
        <section
            id="lets-build-together"
            className="overflow-hidden bg-gradient-to-b from-white to-blue-50 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
                        Open For Internship
                        <br />
                        Opportunities
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        I'm always excited to learn, collaborate and contribute
                        to meaningful projects. Whether it's a Full Stack
                        Developer internship or an opportunity to work with
                        modern web technologies, I'd love to connect and discuss
                        how I can contribute.
                    </p>
                </motion.div>

                {/* Opportunities */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {opportunities.map((item) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{ once: true }}
                            className="rounded-[35px] border border-slate-200 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {item.icon}

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="mt-32 rounded-[40px] bg-gradient-to-r from-indigo-50 to-sky-50 p-14 text-center shadow-xl"
                >
                    <Rocket
                        size={50}
                        className="mx-auto text-indigo-600"
                    />

                    <h2 className="mt-8 text-4xl font-extrabold text-slate-900">
                        Building, Learning & Growing Every Day
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
                        I enjoy solving problems, building modern web applications
                        and continuously improving my development skills. I'm
                        currently seeking opportunities where I can learn from
                        experienced developers while contributing to meaningful
                        products and real-world projects.
                    </p>
                </motion.div>

                {/* Action Buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="mt-24 flex flex-wrap justify-center gap-6"
                >
                    {/* Projects */}

                    <a
                        href="#projects"
                        className="flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
                    >
                        <ArrowRight size={22} />
                        View My Projects
                    </a>

                    {/* Resume */}

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-5 text-lg font-semibold text-slate-900 transition duration-300 hover:shadow-xl"
                    >
                        <Download size={22} />
                        Download Resume
                    </a>

                    {/* Contact */}

                    <a
                        href="#contact"
                        className="flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
                    >
                        Say Hello
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LetsBuildTogether;