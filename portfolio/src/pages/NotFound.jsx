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
        icon: Briefcase,
        link: "/#projects",
    },
    {
        title: "My Journey",
        icon: User,
        link: "/#journey",
    },
    {
        title: "Internship Opportunities",
        icon: Rocket,
        link: "/#lets-build-together",
    },
    {
        title: "Contact Me",
        icon: Mail,
        link: "/#contact",
    },
];

const NotFound = () => {
    return (
        <section className="section bg-white flex items-center">
            <div className="container-custom">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        404 ERROR
                    </p>

                    <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                        Page Not Found
                    </h1>

                    <p className="mt-6 text-body max-w-2xl mx-auto">
                        The page you’re looking for doesn’t exist.
                        But there’s still plenty to explore.
                    </p>

                    <Link
                        to="/"
                        className="btn-primary mt-10 inline-flex"
                    >
                        <Home size={18} />
                        Back To Home
                    </Link>
                </motion.div>

                {/* Suggestions */}
                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {suggestions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.title}
                                href={item.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="card text-center"
                            >
                                <div className="flex justify-center">
                                    <div className="rounded-xl bg-indigo-100 p-3">
                                        <Icon size={20} className="text-indigo-600" />
                                    </div>
                                </div>

                                <h2 className="mt-5 text-sm font-semibold text-slate-900">
                                    {item.title}
                                </h2>

                                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-indigo-600">
                                    Explore
                                    <ArrowRight size={14} />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 text-center"
                >
                    <Rocket size={32} className="mx-auto text-indigo-600" />

                    <h2 className="mt-6 text-2xl font-bold text-slate-900">
                        Let’s Build Something Meaningful
                    </h2>

                    <p className="mt-4 text-body max-w-2xl mx-auto">
                        Thanks for visiting my portfolio. I’m always open to collaboration,
                        learning opportunities and meaningful projects.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default NotFound;