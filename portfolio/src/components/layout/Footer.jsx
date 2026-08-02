import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Download, ArrowUpRight, Heart } from "lucide-react";
import profile from "../../constants/profile";

const quickLinks = [
    { title: "Home", link: "#hero" },
    { title: "Featured Project", link: "#featured-project" },
    { title: "Projects", link: "#projects" },
    { title: "Skills", link: "#skills" },
    { title: "Journey", link: "#journey" },
    { title: "Contact", link: "#contact" },
];

const Footer = () => {
    return (
        <footer className="section section-gradient border-t border-slate-200 dark:border-slate-800">
            <div className="container-custom">

                {/* Top Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="heading-lg">
                        SIDDARTHA.DEV
                    </h2>

                    <h3 className="mt-4 text-xl font-semibold text-indigo-600">
                        Full Stack Developer
                    </h3>

                    <p className="text-muted mx-auto mt-6 max-w-3xl text-lg">
                        Building secure, scalable and modern web applications using
                        Django REST Framework, React and PostgreSQL while continuously
                        learning modern software engineering practices.
                    </p>
                </motion.div>

                {/* Middle Sections */}
                <div className="mt-20 grid gap-12 text-center md:grid-cols-3">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold">Quick Links</h3>

                        <div className="mt-6 space-y-4">
                            {quickLinks.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.link}
                                    className="block text-muted transition hover:text-indigo-600"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xl font-bold">Let's Connect</h3>

                        <div className="mt-6 space-y-4">

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 text-muted transition hover:text-indigo-600"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 text-muted transition hover:text-indigo-600"
                            >
                                <FaLinkedin size={18} />
                                LinkedIn
                            </a>

                            <a
                                href={`mailto:${profile.email}`}
                                className="flex items-center justify-center gap-2 text-muted transition hover:text-indigo-600"
                            >
                                <Mail size={18} />
                                Email
                            </a>

                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 text-muted transition hover:text-indigo-600"
                            >
                                <Download size={18} />
                                Resume
                            </a>

                        </div>
                    </div>

                    {/* Opportunities */}
                    <div>
                        <h3 className="text-xl font-bold">
                            Open For Opportunities
                        </h3>

                        <p className="text-muted mt-6">
                            I'm currently open to Full Stack Developer internship
                            opportunities, collaborative projects, and meaningful
                            learning experiences.
                        </p>

                        <a
                            href="#contact"
                            className="btn-primary mt-8 inline-flex px-6 py-3"
                        >
                            Say Hello
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-20 border-t border-slate-200 pt-10 text-center dark:border-slate-800">

                    <p className="text-muted">
                        Let's build something meaningful together.
                    </p>

                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Siddartha Raj Subedi.
                        Designed & Developed with{" "}
                        <Heart size={14} className="mx-1 inline text-red-500" />
                        by Siddartha Raj Subedi.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;