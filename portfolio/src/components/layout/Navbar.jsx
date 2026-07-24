import { useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto mt-5 max-w-7xl px-4">
                <nav className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#0B1220]/80 px-6 backdrop-blur-xl shadow-2xl">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-2 text-2xl font-bold text-white"
                    >
                        <span className="text-violet-500">&lt;/&gt;</span>
                        <span>CodeCraft</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 transition duration-300 hover:text-violet-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <button
                            onClick={toggleTheme}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </button>

                        <a
                            href="#contact"
                            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
                        >
                            Hire Me
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            onClick={toggleTheme}
                            className="rounded-lg border border-slate-700 p-2 text-slate-300"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="rounded-lg border border-slate-700 p-2 text-slate-300"
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-[#0B1220]/95 p-6 backdrop-blur-xl lg:hidden">
                        <div className="flex flex-col gap-5">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-slate-300 transition hover:text-violet-400"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="/resume.pdf"
                                download
                                onClick={() => setOpen(false)}
                                className="rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-violet-700"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;