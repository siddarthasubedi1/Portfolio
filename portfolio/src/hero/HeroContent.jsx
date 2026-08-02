import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../constants/profile";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-6 py-2 text-sm font-semibold text-indigo-700">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                Available for Full Stack Developer Internship
            </div>

            {/* Name */}
            <h1 className="mt-8 text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                Siddartha Raj Subedi
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-red-400">
                Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-8 text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
                Focused on building scalable web applications and clean backend systems
                using React, Django REST Framework and PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
                <a href="#projects" className="btn-primary px-10 py-4 text-lg">
                    View Projects
                    <ArrowRight size={20} />
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline px-10 py-4 text-lg"
                >
                    <Download size={20} />
                    Resume
                </a>
            </div>

            {/* Special Social Icons */}
            <div className="mt-12 flex justify-center gap-8">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-slate-800 to-slate-600 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                    <FaGithub size={26} />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                    <FaLinkedin size={26} />
                </a>
            </div>
        </motion.div>
    );
};

export default HeroContent;