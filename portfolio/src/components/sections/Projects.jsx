import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import { projects } from "../../constants/projectData";
import profile from "../../constants/profile";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-white py-28 lg:py-36"
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-[120px]" />

                <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-emerald-100/50 blur-[140px]" />

                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-100/40 blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl text-center"
                >
                    {/* Small Label */}

                    <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                        <FolderGit2 size={16} />

                        My Projects
                    </span>

                    {/* Heading */}

                    <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Things I've Built
                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                        A collection of practical web applications built using
                        modern technologies, clean architecture and responsive
                        design principles.
                    </p>
                </motion.div>

                {/* =====================================================
                    PROJECT GRID
                ====================================================== */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}

                </div>

                {/* =====================================================
                    BOTTOM CTA
                ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-24"
                >
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-green-100
                            bg-gradient-to-br
                            from-green-50
                            via-white
                            to-emerald-50
                            px-6
                            py-12
                            text-center
                            shadow-[0_20px_60px_rgba(34,197,94,0.08)]
                            sm:px-10
                            lg:px-16
                        "
                    >

                        {/* Decorative Glow */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-200/40 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />

                        <div className="relative z-10">

                            {/* Icon */}

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-green-600 shadow-sm ring-1 ring-green-100">
                                <FaGithub size={26} />
                            </div>

                            {/* Heading */}

                            <h3 className="mt-7 text-2xl font-bold text-slate-900 sm:text-3xl">
                                Want to see more?
                            </h3>

                            {/* Description */}

                            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                                Explore my GitHub profile to see more projects,
                                experiments, source code and ongoing development work.
                            </p>

                            {/* Button */}

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-4
                                    rounded-full
                                    bg-gradient-to-r
                                    from-green-600
                                    to-emerald-600
                                    px-7
                                    py-4
                                    font-semibold
                                    text-white
                                    shadow-[0_12px_30px_rgba(34,197,94,0.25)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_18px_40px_rgba(34,197,94,0.35)]
                                "
                            >
                                <FaGithub size={19} />

                                Explore More Projects

                                <span
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-green-600
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    <ArrowUpRight size={16} />
                                </span>
                            </a>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;