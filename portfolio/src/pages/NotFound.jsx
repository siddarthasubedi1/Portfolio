import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
    Home,
    Rocket,
    ArrowRight,
    Briefcase,
    User,
    Mail,
} from "lucide-react";

const suggestions = [
    {
        title: "View My Projects",
        icon: <Briefcase size={25} />,
        link: "/#projects",
    },

    {
        title: "My Journey",
        icon: <User size={25} />,
        link: "/#my-journey",
    },

    {
        title: "Internship Opportunities",
        icon: <Rocket size={25} />,
        link: "/#lets-build-together",
    },

    {
        title: "Contact Me",
        icon: <Mail size={25} />,
        link: "/#contact",
    },
];

const NotFound = () => {
    return (
        <section className="flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white to-blue-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                {/* -------------------------------- */}

                {/* HERO */}

                {/* -------------------------------- */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        OOPS!
                    </p>

                    <h1 className="mt-8 text-6xl font-extrabold text-slate-900 md:text-8xl">
                        Lost Somewhere?
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        The page you're looking for doesn't exist,
                        but there's still plenty to explore.
                    </p>

                    <Link
                        to="/"
                        className="mt-12 inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
                    >
                        <Home size={22} />
                        Back To Home
                    </Link>
                </motion.div>

                {/* -------------------------------- */}

                {/* CARDS */}

                {/* -------------------------------- */}

                <div className="mt-28 grid gap-8 md:grid-cols-2">
                    {suggestions.map((item) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            whileHover={{
                                y: -5,
                            }}
                            className="rounded-[35px] border border-slate-200 bg-white p-10 shadow-xl transition duration-300"
                        >
                            <div className="text-indigo-600">
                                {item.icon}
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-slate-900">
                                {item.title}
                            </h2>

                            <div className="mt-6 flex items-center gap-3 font-semibold text-indigo-600">
                                Explore
                                <ArrowRight size={18} />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* -------------------------------- */}

                {/* MESSAGE */}

                {/* -------------------------------- */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="mt-28 rounded-[40px] bg-white p-14 text-center shadow-xl"
                >
                    <Rocket
                        size={50}
                        className="mx-auto text-indigo-600"
                    />

                    <h2 className="mt-8 text-4xl font-extrabold text-slate-900">
                        Let's Build Something Meaningful
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        Thanks for visiting my portfolio. I'm always
                        excited to connect with developers, recruiters
                        and people building meaningful products.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;