import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    const [active, setActive] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navLinks.map((item) =>
                document.querySelector(item.href)
            );

            let current = "#hero";

            sections.forEach((section) => {
                if (!section) return;

                const top = section.offsetTop - 140;
                if (window.scrollY >= top) current = `#${section.id}`;
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled
                    ? "bg-white/80 shadow-md border-b border-slate-200"
                    : "bg-white/60"
                    }`}
            >
                <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-2xl font-black tracking-tight text-slate-900 dark:text-white"
                    >
                        Siddartha<span className="text-indigo-600">.</span>
                    </a>

                    {/* Desktop Menu */}

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`relative font-medium transition-all duration-300 ${active === item.href
                                    ? "text-indigo-600"
                                    : "text-slate-600 hover:text-indigo-600 hover:-translate-y-0.5"
                                    }`}
                            >
                                {item.title}

                                {active === item.href && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <ThemeToggle />

                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-5 py-3"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        aria-label="Open menu"
                        onClick={() => setOpen(true)}
                        className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.header >

            {/* Overlay */}
            < AnimatePresence >
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white p-8 shadow-2xl dark:bg-slate-900"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Menu
                                </h2>

                                <button
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    <X size={26} />
                                </button>
                            </div>

                            <nav className="mt-12 flex flex-col gap-6">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-auto space-y-4">
                                <ThemeToggle />

                                <a
                                    href={profile.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    inline-flex items-center gap-2
                                    rounded-full
                                    bg-gradient-to-r from-indigo-600 to-purple-600
                                    px-6 py-3
                                    font-semibold text-white
                                    transition-all duration-300
                                    hover:scale-105
                                    hover:shadow-lg
                                  "
                                >
                                    <Download size={18} />
                                    Download Resume
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )
                }
            </AnimatePresence >
        </>
    );
};

export default Navbar;