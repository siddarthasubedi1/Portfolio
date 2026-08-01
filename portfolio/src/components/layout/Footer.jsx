
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {

    Mail,
    Download,
    ArrowUpRight,
    Heart,
} from "lucide-react";
import profile from "../../constants/profile";

const quickLinks = [
    {
        title: "Home",
        link: "#hero",
    },
    {
        title: "Featured Project",
        link: "#featured-project",
    },
    {
        title: "What I Build",
        link: "#what-i-build",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "Contact",
        link: "#contact",
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-24">
                {/* Header */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-extrabold text-slate-900">
                        SIDDARTHA.DEV
                    </h2>

                    <h3 className="mt-6 text-2xl font-semibold text-indigo-600">
                        Full Stack Developer
                    </h3>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        Building secure, scalable and modern web applications using Django
                        REST Framework, React and PostgreSQL while continuously learning
                        modern software engineering practices.
                    </p>
                </motion.div>

                {/* Sections */}

                <div className="mt-24 grid gap-16 text-center md:grid-cols-3">
                    {/* Quick Links */}

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Quick Links
                        </h3>

                        <div className="mt-8 space-y-5">
                            {quickLinks.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.link}
                                    className="block text-lg text-slate-600 transition hover:text-indigo-600"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Let's Connect
                        </h3>

                        <div className="mt-8 space-y-5">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 text-lg text-slate-600 transition hover:text-indigo-600"
                            >
                                <FaGithub size={20} />
                                GitHub
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 text-lg text-slate-600 transition hover:text-indigo-600"
                            >
                                <FaLinkedin size={20} />
                                LinkedIn
                            </a>

                            <a
                                href={`mailto:${profile.email}`}
                                className="flex items-center justify-center gap-3 text-lg text-slate-600 transition hover:text-indigo-600"
                            >
                                <Mail size={20} />
                                Email
                            </a>

                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 text-lg text-slate-600 transition hover:text-indigo-600"
                            >
                                <Download size={20} />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Opportunities */}

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Open For Opportunities
                        </h3>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            I'm currently open to Full Stack Developer internship
                            opportunities, collaborative projects, and meaningful learning
                            experiences.
                        </p>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
                        >
                            Say Hello
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Bottom */}

                <div className="mt-24 border-t border-slate-200 pt-12 text-center">
                    <p className="text-lg leading-9 text-slate-600">
                        Let's build something meaningful together.
                    </p>

                    <p className="mt-5 text-slate-500">
                        © {new Date().getFullYear()} Siddartha Raj Subedi. Designed &
                        Developed with{" "}
                        <Heart
                            size={16}
                            className="mx-1 inline text-red-500"
                        />{" "}
                        by Siddartha Raj Subedi.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;