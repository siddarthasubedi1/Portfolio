import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
    Mail,
    Phone,
    MapPin,
    Download,
    Send,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import projects from "../../data/projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-[#070B1A] py-24 text-white"
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
                        Featured Projects
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Some of My Recent Work
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        These projects showcase my experience with React,
                        Django REST Framework, PostgreSQL and modern web
                        development practices.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
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
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                            }}
                            className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1220] shadow-xl transition-all duration-300 hover:border-violet-500"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {project.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-8 flex flex-wrap gap-4">

                                    <Link
                                        to={`/project/${project.slug}`}
                                        className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700"
                                    >
                                        View Details

                                        <ArrowUpRight size={18} />
                                    </Link>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition hover:border-violet-500 hover:bg-slate-900"
                                    >
                                        <FaGithub size={18} />

                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;