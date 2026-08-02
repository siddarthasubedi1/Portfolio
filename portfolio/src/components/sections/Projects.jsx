import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants/projectData";
import profile from "../../constants/profile";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="section bg-slate-50">            <div className="container-custom ">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl text-center"
            >
                <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600 ">
                    PROJECTS
                </p>

                <h2 className="heading-lg mt-6">
                    Things I've Built
                </h2>

                <p className="mt-6 text-body max-w-3xl mx-auto">
                    Real-world applications built with modern full stack technologies,
                    focusing on scalability, clean architecture and performance.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* Explore Button */}
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
                    className="btn-primary px-10 py-4 text-lg"
                >
                    <FaGithub size={20} />
                    Explore More Projects
                </a>
            </motion.div>

        </div>
        </section>
    );
};

export default Projects;