import {
    ArrowUp,
    Download,
    Mail,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import profile from "../../constants/profile";

const Footer = () => {
    const year = new Date().getFullYear();

    const footerLinks = [
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Projects",
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

    return (
        <footer
            className="
                border-t border-slate-200
                bg-slate-950
                text-white
            "
        >
            <div className="container-custom">

                {/* TOP */}
                <div
                    className="
                        grid gap-10
                        py-12
                        sm:py-14
                        lg:grid-cols-[1.1fr_.7fr_.7fr]
                    "
                >

                    {/* BRAND */}
                    <div>
                        <a
                            href="#hero"
                            className="
                                inline-flex
                                items-center gap-3
                            "
                        >
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
                                <p className="font-extrabold text-white">
                                    Siddartha Raj Subedi
                                </p>

                                <p className="text-xs text-slate-500">
                                    Full Stack Developer
                                </p>
                            </div>
                        </a>

                        <p
                            className="
                                mt-5
                                max-w-md
                                text-sm leading-7
                                text-slate-400
                            "
                        >
                            Computer System Engineering student focused on
                            building responsive full stack applications with
                            React, Django REST Framework and PostgreSQL.
                        </p>

                        <div className="mt-6 flex gap-2">

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    text-slate-300
                                    transition
                                    hover:border-green-600
                                    hover:bg-green-600
                                    hover:text-white
                                "
                            >
                                <FaGithub size={17} />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    text-slate-300
                                    transition
                                    hover:border-green-600
                                    hover:bg-green-600
                                    hover:text-white
                                "
                            >
                                <FaLinkedinIn size={17} />
                            </a>

                            <a
                                href={`mailto:${profile.email}`}
                                aria-label="Email"
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    border border-white/10
                                    bg-white/5
                                    text-slate-300
                                    transition
                                    hover:border-green-600
                                    hover:bg-green-600
                                    hover:text-white
                                "
                            >
                                <Mail size={17} />
                            </a>

                        </div>
                    </div>

                    {/* LINKS */}
                    <div>
                        <p
                            className="
                                text-xs font-bold
                                uppercase
                                tracking-[0.16em]
                                text-slate-500
                            "
                        >
                            Navigation
                        </p>

                        <nav className="mt-5 flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="
                                        w-fit
                                        text-sm
                                        font-medium
                                        text-slate-400
                                        transition
                                        hover:text-green-400
                                    "
                                >
                                    {link.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* OPPORTUNITY */}
                    <div>
                        <p
                            className="
                                text-xs font-bold
                                uppercase
                                tracking-[0.16em]
                                text-slate-500
                            "
                        >
                            Opportunities
                        </p>

                        <p
                            className="
                                mt-5
                                text-sm leading-7
                                text-slate-400
                            "
                        >
                            Currently interested in Full Stack Developer
                            internship opportunities.
                        </p>

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
        transition-all
        hover:-translate-y-0.5
        hover:bg-green-700
        hover:shadow-[0_10px_24px_rgba(22,163,74,0.18)]
        lg:inline-flex
    "
                        >
                            Resume
                            <Download size={15} />
                        </a>
                    </div>

                </div>

                {/* BOTTOM */}
                <div
                    className="
                        flex flex-col
                        items-center justify-between
                        gap-4
                        border-t border-white/10
                        py-6
                        text-center
                        sm:flex-row
                        sm:text-left
                    "
                >
                    <p className="text-xs text-slate-500">
                        © {year} Siddartha Raj Subedi. All rights reserved.
                    </p>

                    <a
                        href="#hero"
                        className="
                            inline-flex
                            items-center gap-2
                            text-xs
                            font-semibold
                            text-slate-400
                            transition
                            hover:text-green-400
                        "
                    >
                        Back to top

                        <ArrowUp size={14} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;