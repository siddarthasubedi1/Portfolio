import { motion } from "framer-motion";
import {
    GraduationCap,
    Code2,
    Briefcase,
    MapPin,
} from "lucide-react";

const About = () => {
    const cards = [
        {
            icon: <GraduationCap size={28} />,
            title: "Education",
            description:
                "Second-Year Computer System Engineering student at ISMT College, Nepal (University of Sunderland, UK).",
        },
        {
            icon: <Code2 size={28} />,
            title: "Tech Stack",
            description:
                "React, Django REST Framework, PostgreSQL, Tailwind CSS, Python, Git and REST APIs.",
        },
        {
            icon: <Briefcase size={28} />,
            title: "Career Goal",
            description:
                "Looking for internship opportunities to gain industry experience and contribute to real-world projects.",
        },
        {
            icon: <MapPin size={28} />,
            title: "Location",
            description:
                "Kathmandu, Nepal",
        },
    ];

    return (
        <section
            id="about"
            className="scroll-mt-32 bg-[#070B1A] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-violet-400">
                        About Me
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Passionate About Creating
                        <span className="text-violet-500"> Modern Web Applications</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        I'm Siddartha Raj Subedi, an aspiring Full Stack Developer and a
                        Computer System Engineering student. I enjoy building scalable,
                        secure and user-friendly web applications while continuously
                        improving my development skills.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8 shadow-xl"
                    >
                        <h3 className="mb-6 text-2xl font-semibold">
                            Who I Am
                        </h3>

                        <p className="leading-8 text-slate-400">
                            I specialize in developing full stack web applications using
                            React for the frontend and Django REST Framework for the backend.
                            I enjoy solving real-world problems, designing REST APIs, and
                            creating responsive user interfaces.
                        </p>

                        <p className="mt-6 leading-8 text-slate-400">
                            My goal is to join a collaborative development team where I can
                            learn from experienced developers, contribute to meaningful
                            projects, and continue growing as a software engineer.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "React",
                                "Django",
                                "Python",
                                "PostgreSQL",
                                "REST API",
                                "Tailwind CSS",
                                "Git",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="grid gap-6 sm:grid-cols-2"
                    >
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-3xl border border-slate-800 bg-[#0B1220] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500"
                            >
                                <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400">
                                    {card.icon}
                                </div>

                                <h3 className="mb-3 text-xl font-semibold">
                                    {card.title}
                                </h3>

                                <p className="leading-7 text-slate-400">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;