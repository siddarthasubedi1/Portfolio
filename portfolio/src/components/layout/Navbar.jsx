import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import profile from "../../constants/profile";

const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "Featured", href: "#featured-project" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Journey", href: "#journey" },
    { title: "Certificates", href: "#certificates" },
    { title: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    {/* Logo */}

                    <a
                        href="#hero"
                        className="text-2xl font-black tracking-tight text-slate-900"
                    >
                        Siddartha<span className="text-indigo-600">.</span>
                    </a>
                    <ThemeToggle />
                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="font-medium text-slate-600 transition hover:text-indigo-600"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    {/* Resume */}

                    <div className="hidden lg:block">
                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-lg p-2 lg:hidden"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed right-0 top-0 z-40 h-screen w-72 bg-white p-8 shadow-2xl lg:hidden"
                    >
                        <div className="mt-20 flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-semibold text-slate-700 transition hover:text-indigo-600"
                                >
                                    {item.title}
                                </a>
                            ))}

                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
                            >
                                <Download size={18} />
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;