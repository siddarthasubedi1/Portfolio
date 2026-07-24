import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-[#070B1A] text-white">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold">
                            Siddartha Raj Subedi
                        </h2>

                        <p className="mt-3 max-w-md leading-7 text-slate-400">
                            Aspiring Full Stack Developer passionate about building
                            secure, scalable and user-friendly web applications using
                            React, Django REST Framework and PostgreSQL.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex gap-4">

                        <a
                            href="https://github.com/siddarthasubedi1"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                        >
                            <FaFacebook size={20} />
                        </a>

                    </div>

                </div>

                <div className="my-10 h-px bg-slate-800" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 lg:flex-row">

                    <p>
                        © {new Date().getFullYear()} Siddartha Raj Subedi. All rights reserved.
                    </p>

                    <p>
                        Built with React, Tailwind CSS, Framer Motion & Vite.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;