import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants/projectData";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-slate-50 py-28"
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
                        PROJECTS
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        Things I've Built
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        These projects demonstrate my experience building full-stack web
                        applications with React, Django REST Framework and PostgreSQL while
                        applying modern software engineering practices.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.slug}
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
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                            }}
                            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all hover:shadow-2xl"
                        >
                            {/* Image */}

                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {project.title}
                                </h3>

                                <p className="mt-4 line-clamp-4 leading-8 text-slate-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to={`/project/${project.slug}`}
                                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
                                    >
                                        Details
                                        <ArrowRight size={18} />
                                    </Link>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold transition hover:border-slate-900"
                                    >
                                        <FaGithub size={20} />
                                        GitHub
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-indigo-300 px-5 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
                                        >
                                            <ExternalLink size={18} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href="https://github.com/YOUR_GITHUB_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105"
                    >
                        <FaGithub size={20} />
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;