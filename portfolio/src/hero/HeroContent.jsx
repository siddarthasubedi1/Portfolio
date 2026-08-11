import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Mail,
    MapPin,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import profile from "../constants/profile";

const HeroContent = () => {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            {/* Available Badge */}
            <motion.div
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2"
            >
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

                <span className="text-sm font-semibold text-green-700">
                    Available for Internship
                </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className="text-lg font-medium text-green-600"
            >
                Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .3 }}
                className="mt-5 heading-xl"
            >
                Siddartha Raj

                <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    Subedi
                </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .5 }}
                className="mt-8 max-w-3xl text-2xl font-bold text-slate-700 md:text-3xl"
            >
                Full Stack Developer
            </motion.h2>

            <p className="mt-3 text-lg text-green-600 font-semibold">
                React • Django REST Framework • PostgreSQL
            </p>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .7 }}
                className="mt-8 max-w-3xl text-body"
            >
                I design and develop modern, responsive and scalable web
                applications using React and Django REST Framework.
                My goal is to build products that are fast, beautiful,
                secure and user-friendly.
            </motion.p>

            {/* Info Cards */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

                <div className="glass flex items-center gap-3 rounded-full px-5 py-3 shadow-sm">
                    <MapPin
                        size={18}
                        className="text-green-600"
                    />

                    <span className="font-medium text-slate-600">
                        Pokhara, Nepal
                    </span>
                </div>

                <div className="glass flex items-center gap-3 rounded-full px-5 py-3 shadow-sm">
                    <Mail
                        size={18}
                        className="text-green-600"
                    />

                    <span className="font-medium text-slate-600">
                        Open to Internship
                    </span>
                </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

                <a
                    href="#projects"
                    className="btn-primary"
                >
                    View My Projects

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-green-600">
                        <ArrowRight size={18} />
                    </span>
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                >
                    Resume

                    <Download size={18} />
                </a>

            </div>

            {/* Social Icons */}

            <div className="mt-14 flex items-center gap-5">

                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
                >
                    <FaLinkedin size={22} />
                </a>

            </div>

        </div>
    );
};

export default HeroContent;