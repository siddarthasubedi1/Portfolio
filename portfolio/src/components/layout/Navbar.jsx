import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    Download,
    Menu,
    X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../../constants/profile";

const navLinks = [
    {
        title: "Home",
        href: "#hero",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Work",
        href: "#projects",
    },
    {
        title: "Skills",
        href: "#skills",
    },
    {
        title: "Journey",
        href: "#journey",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            let current = "#hero";

            navLinks.forEach((item) => {
                const section = document.querySelector(item.href);

                if (!section) return;

                if (window.scrollY >= section.offsetTop - 150) {
                    current = item.href;
                }
            });

            setActiveSection(current);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <header
                className={`
                    fixed left-0 right-0 top-0 z-50
                    h-20
                    border-b border-slate-200
                    transition-all duration-300
                    ${scrolled
                        ? "bg-white/95 shadow-[0_5px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl"
                        : "bg-white"
                    }
                `}
            >
                <div className="container-custom flex h-full items-center justify-between">

                    {/* ================= LOGO ================= */}
                    <a
                        href="#hero"
                        className="group flex items-center gap-3"
                    >
                        <div
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-xl
                                bg-green-600
                                text-sm font-extrabold
                                text-white
                                shadow-[0_8px_20px_rgba(22,163,74,0.18)]
                                transition-all duration-300
                                group-hover:-translate-y-0.5
                                group-hover:bg-green-700
                                group-hover:shadow-[0_12px_26px_rgba(22,163,74,0.22)]
                            "
                        >
                            SS
                        </div>

                        <div className="leading-tight">
                            <p className="text-[16px] font-extrabold text-slate-900">
                                Siddartha
                                <span className="text-green-600">.</span>
                            </p>

                            <p className="hidden text-[10px] font-semibold tracking-[0.14em] text-slate-400 sm:block">
                                FULL STACK DEVELOPER
                            </p>
                        </div>
                    </a>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((item) => {
                            const active =
                                activeSection === item.href;

                            return (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className={`
                                        relative
                                        rounded-lg
                                        px-3.5 py-2.5
                                        text-[13px]
                                        font-semibold
                                        transition-all duration-300
                                        ${active
                                            ? "bg-green-50 text-green-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-green-700"
                                        }
                                    `}
                                >
                                    {item.title}
                                </a>
                            );
                        })}
                    </nav>

                    {/* ================= DESKTOP RESUME ================= */}
                    <a
                        href={profile.resume}
                        download="Siddartha_Raj_Subedi_Resume.pdf"
                        className="
                            hidden
                            items-center gap-2
                            rounded-xl
                            bg-green-600
                            px-4 py-2.5
                            text-[13px]
                            font-bold text-white
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:bg-green-700
                            hover:shadow-[0_10px_24px_rgba(22,163,74,0.18)]
                            lg:inline-flex
                        "
                    >
                        Resume
                        <Download
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-y-0.5"
                        />
                    </a>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        aria-label="Open navigation"
                        onClick={() => setMobileOpen(true)}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-xl
                            border border-slate-200
                            bg-white
                            text-slate-700
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:border-green-300
                            hover:bg-green-50
                            hover:text-green-700
                            lg:hidden
                        "
                    >
                        <Menu size={20} />
                    </button>

                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* OVERLAY */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="
                                fixed inset-0 z-[60]
                                bg-slate-950/35
                                backdrop-blur-sm
                            "
                        />

                        {/* SIDE MENU */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.28,
                                ease: "easeOut",
                            }}
                            className="
                                fixed right-0 top-0 z-[70]
                                flex h-dvh
                                w-[86%]
                                max-w-[360px]
                                flex-col
                                bg-white
                                p-6
                                shadow-2xl
                            "
                        >
                            {/* MOBILE HEADER */}
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">
                                    <span
                                        className="
                                            flex h-10 w-10
                                            items-center justify-center
                                            rounded-xl
                                            bg-green-600
                                            text-sm font-black
                                            text-white
                                        "
                                    >
                                        SS
                                    </span>

                                    <div>
                                        <p className="font-extrabold text-slate-900">
                                            Siddartha.
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            Portfolio
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Close navigation"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                    className="
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-xl
                                        bg-slate-100
                                        text-slate-700
                                        transition-all duration-300
                                        hover:bg-green-50
                                        hover:text-green-700
                                    "
                                >
                                    <X size={19} />
                                </button>

                            </div>

                            <div className="my-6 h-px bg-slate-100" />

                            {/* MOBILE LINKS */}
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                        className="
                                            flex items-center
                                            justify-between
                                            rounded-xl
                                            px-4 py-3.5
                                            text-sm
                                            font-semibold
                                            text-slate-700
                                            transition-all duration-300
                                            hover:translate-x-1
                                            hover:bg-green-50
                                            hover:text-green-700
                                        "
                                    >
                                        {item.title}

                                        <ArrowUpRight
                                            size={15}
                                            className="
                                                transition-transform duration-300
                                                group-hover:translate-x-0.5
                                                group-hover:-translate-y-0.5
                                            "
                                        />
                                    </a>
                                ))}
                            </nav>

                            {/* MOBILE RESUME */}
                            <div className="mt-auto pt-8">
                                <a
                                    href={profile.resume}
                                    download="Siddartha_Raj_Subedi_Resume.pdf"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                    className="
                                        flex w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-green-600
                                        px-5 py-3.5
                                        text-sm
                                        font-bold
                                        text-white
                                        transition-all duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-green-700
                                        hover:shadow-[0_10px_24px_rgba(22,163,74,0.18)]
                                    "
                                >
                                    <Download size={17} />

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