import { useEffect, useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
            let current = "#hero";

            navLinks.forEach((item) => {
                const section = document.querySelector(item.href);
                if (!section) return;

                const top = section.offsetTop - 120;
                if (window.scrollY >= top) current = item.href;
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* ===== Navbar ===== */}
            <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-slate-200 bg-white">
                <div className="container-custom flex h-full items-center justify-between">

                    {/* Logo */}
                    <a href="#hero" className="text-xl font-bold text-slate-900">
                        Siddartha<span className="text-indigo-600">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`text-sm font-semibold transition ${activeSection === item.href
                                    ? "text-indigo-600"
                                    : "text-slate-600 hover:text-indigo-600"
                                    }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    {/* Resume Button */}
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:inline-flex items-center gap-3 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
                    >
                        Resume
                        <Download size={16} />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* ===== Mobile Drawer ===== */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40"
                        />

                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed right-0 top-0 z-50 h-screen w-80 bg-white p-6 shadow-lg"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="font-bold text-lg">Menu</h2>
                                <button onClick={() => setMobileOpen(false)}>
                                    <X size={22} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-between text-base font-semibold text-slate-700 hover:text-indigo-600"
                                    >
                                        {item.title}
                                        <ArrowUpRight size={16} />
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-10">
                                <a
                                    href={profile.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
                                >
                                    <Download size={18} />
                                    Download Resume
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;