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
            className="relative overflow-hidden bg-white py-24 lg:py-28"
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

                {/* GRID */}
                <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">

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
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                        mx-auto
                        mt-14
                        flex
                        max-w-6xl
                        flex-col
                        items-center
                        justify-between
                        gap-6
                        rounded-[24px]
                        border
                        border-green-100
                        bg-green-50/70
                        px-7
                        py-8
                        text-center
                        sm:px-9
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-center">

                        <span
                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                                text-green-600
                                shadow-sm
                            "
                        >
                            <FaGithub size={22} />
                        </span>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900">
                                Want to see more projects?
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