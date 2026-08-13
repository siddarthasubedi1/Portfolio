import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
    ArrowRight,
    FolderGit2,
} from "lucide-react";

import { projects } from "../../constants/projectData";
import profile from "../../constants/profile";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-white py-28 lg:py-36"
        >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-100/50 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-[130px]" />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                        <FolderGit2 size={15} />
                        My Projects
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Things I've
                        <span className="text-green-600">
                            {" "}
                            Built
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        A selection of projects where I have worked with
                        frontend development, backend APIs, databases and
                        responsive interfaces.
                    </p>
                </motion.div>

                {/* =====================================================
                    PROJECT GRID
                ====================================================== */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.07,
                            }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                {/* GITHUB CTA */}
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

                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Visit my GitHub profile to explore more source
                                code and development work.
                            </p>
                        </div>
                    </div>

                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-2.5
                            rounded-xl
                            bg-green-600
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-green-700
                        "
                    >
                        <FaGithub size={17} />

                        View GitHub

                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;