import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../constants/profile";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
                <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                Available for Full Stack Developer Internship
            </div>

            {/* Name */}
            <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                Siddartha Raj Subedi
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-indigo-600">
                Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
                Full Stack Developer focused on building scalable web applications
                and clean backend systems using React, Django REST Framework and PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <a href="#projects" className="btn-primary">
                    View Projects
                    <ArrowRight size={18} />
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                >
                    <Download size={18} />
                    Resume
                </a>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex justify-center gap-6">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:text-indigo-600"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:text-indigo-600"
                >
                    <FaLinkedin size={22} />
                </a>
            </div>

        </motion.div>
    );
};

export default HeroContent;