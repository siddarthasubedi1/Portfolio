import { motion } from "framer-motion";
import {
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Code2,
    Rocket,
    Laptop,
    CheckCircle2,
} from "lucide-react";

const cards = [
    {
        icon: <GraduationCap className="text-indigo-600" size={28} />,
        title: "Education",
        description:
            "BSc (Hons) Computer System Engineering at ISMT College, Pokhara.",
    },
    {
        icon: <Code2 className="text-indigo-600" size={28} />,
        title: "Full Stack Development",
        description:
            "Building scalable applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: <BriefcaseBusiness className="text-indigo-600" size={28} />,
        title: "Open To Work",
        description:
            "Actively seeking Full Stack Developer internship opportunities.",
    },
    {
        icon: <MapPin className="text-indigo-600" size={28} />,
        title: "Location",
        description: "Pokhara, Nepal",
    },
];

const strengths = [
    "REST API Development",
    "Responsive Web Design",
    "Authentication & Authorization",
    "Database Design",
    "Frontend Development",
    "Backend Development",
    "Problem Solving",
    "Clean & Maintainable Code",
];

export default function About() {
    return (
        <section id="about" className="section section-gradient">
            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        ABOUT ME
                    </p>

                    <h2 className="heading-lg mt-5">
                        Building Modern Full Stack Applications
                    </h2>

                    <p className="text-muted mx-auto mt-8 max-w-3xl text-lg">
                        I'm Siddartha Raj Subedi, a Computer System Engineering student
                        passionate about building modern, secure and scalable web
                        applications using React and Django REST Framework.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="mt-20 grid gap-12 lg:grid-cols-2">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card p-8">
                            <div className="flex items-center gap-3">
                                <Laptop className="text-indigo-600" size={30} />
                                <h3 className="text-2xl font-bold">My Goal</h3>
                            </div>

                            <p className="text-muted mt-6">
                                My goal is to become a professional Full Stack Developer by
                                creating responsive, scalable and user-focused applications
                                while continuously learning.
                            </p>

                            <div className="mt-8 rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-500/10">
                                <div className="flex items-center gap-3">
                                    <Rocket className="text-indigo-600" />
                                    <h4 className="text-lg font-bold">
                                        Currently Looking For
                                    </h4>
                                </div>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Full Stack Internship",
                                        "Junior Web Developer Role",
                                        "Collaborative Projects",
                                        "Learning Opportunities",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle2
                                                size={18}
                                                className="text-green-600"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="card p-8 transition hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4">
                                    {card.icon}
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                                <p className="text-muted mt-4">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Strengths */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h3 className="text-center text-3xl font-bold">
                        What I Bring To The Table
                    </h3>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {strengths.map((s) => (
                            <div
                                key={s}
                                className="card p-6 text-center transition hover:shadow-xl"
                            >
                                <p className="font-semibold">{s}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}