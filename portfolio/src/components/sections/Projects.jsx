import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FolderOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../constants/projectData";
import profile from "../../constants/profile";

const Projects = () => {
    return (
        <section id="projects" className="section section-gradient">
            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        PROJECTS
                    </p>

                    <h2 className="heading-lg mt-6">
                        Things I've Built
                    </h2>

                    <p className="text-muted mt-8 text-lg">
                        Every project represents practical experience solving real-world
                        problems using modern technologies such as React, Django REST
                        Framework and PostgreSQL.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="card group flex flex-col overflow-hidden transition duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold shadow">
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-8">
                                <div className="flex items-center gap-3">
                                    <FolderOpen size={20} className="text-indigo-600" />
                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-muted mt-5 flex-1">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to={`/project/${project.slug}`}
                                        className="btn-primary text-sm px-5 py-3"
                                    >
                                        Details
                                        <ArrowRight size={16} />
                                    </Link>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline text-sm px-5 py-3"
                                    >
                                        <FaGithub size={16} />
                                        GitHub
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline text-sm px-5 py-3 border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-8 py-4"
                    >
                        <FaGithub size={18} />
                        Explore More Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;