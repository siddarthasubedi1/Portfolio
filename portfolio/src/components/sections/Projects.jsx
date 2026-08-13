import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import {
    ArrowRight,
    FolderGit2,
    Sparkles,
} from "lucide-react";

import { projects } from "../../constants/projectData";
import profile from "../../constants/profile";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="
                relative overflow-hidden
                bg-white
                py-20 sm:py-24 lg:py-28
            "
        >
            {/* BACKGROUND */}

            <div
                className="
                    pointer-events-none
                    absolute -left-40 top-20
                    h-80 w-80
                    rounded-full
                    bg-green-100/50
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-40 bottom-20
                    h-96 w-96
                    rounded-full
                    bg-emerald-100/40
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >
                    <span className="section-badge">
                        <FolderGit2 size={14} />
                        My Projects
                    </span>

                    <h2 className="section-title">
                        Things I&apos;ve
                        <span className="text-green-600">
                            {" "}
                            Built.
                        </span>
                    </h2>

                    <p className="section-description">
                        A selection of projects where I have worked
                        with frontend development, backend APIs,
                        databases and responsive interfaces.
                    </p>

                </motion.div>

                {/* PROJECT GRID */}

                <div
                    className="
                        mx-auto
                        mt-12
                        grid max-w-6xl
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
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
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.55,
                    }}
                    className="
                        relative
                        mx-auto
                        mt-14
                        max-w-6xl
                        overflow-hidden
                        rounded-[26px]
                        border border-green-100
                        bg-gradient-to-br
                        from-green-50
                        via-white
                        to-emerald-50
                        px-6 py-8
                        shadow-[0_18px_50px_rgba(34,197,94,0.07)]
                        sm:px-8
                        lg:px-10
                    "
                >
                    {/* DECORATION */}

                    <div
                        className="
                            pointer-events-none
                            absolute -right-20 -top-24
                            h-60 w-60
                            rounded-full
                            bg-green-200/40
                            blur-[70px]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute -bottom-28 -left-20
                            h-60 w-60
                            rounded-full
                            bg-emerald-100/60
                            blur-[80px]
                        "
                    />

                    <div
                        className="
                            relative z-10
                            flex flex-col
                            items-center
                            justify-between
                            gap-7
                            text-center
                            lg:flex-row
                            lg:text-left
                        "
                    >
                        {/* LEFT */}

                        <div
                            className="
                                flex flex-col
                                items-center gap-4
                                sm:flex-row
                                lg:items-center
                            "
                        >
                            <div
                                className="
                                    flex h-14 w-14
                                    shrink-0
                                    items-center justify-center
                                    rounded-2xl
                                    bg-white
                                    text-green-600
                                    shadow-sm
                                    ring-1
                                    ring-green-100
                                "
                            >
                                <FaGithub size={23} />
                            </div>

                            <div>

                                <div
                                    className="
                                        flex items-center
                                        justify-center
                                        gap-2
                                        lg:justify-start
                                    "
                                >
                                    <Sparkles
                                        size={13}
                                        className="text-green-600"
                                    />

                                    <p
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]
                                            text-green-600
                                        "
                                    >
                                        More Development Work
                                    </p>
                                </div>

                                <h3
                                    className="
                                        mt-2
                                        text-xl font-bold
                                        text-slate-900
                                        sm:text-2xl
                                    "
                                >
                                    Want to see more?
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        max-w-xl
                                        text-sm leading-6
                                        text-slate-600
                                    "
                                >
                                    Visit my GitHub profile to explore
                                    more source code, experiments and
                                    development work.
                                </p>

                            </div>
                        </div>

                        {/* BUTTON */}

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                btn-primary btn-arrow
                                shrink-0
                            "
                        >
                            <FaGithub size={16} />

                            View GitHub

                            <ArrowRight size={15} />
                        </a>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;