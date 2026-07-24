import { motion } from "framer-motion";
import {
    Code2,
    Database,
    LayoutDashboard,
    Brain,
    Users,
    Rocket,
} from "lucide-react";

const qualities = [
    {
        icon: <Code2 size={28} />,
        title: "Full Stack Development",
        description:
            "Build responsive web applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: <Database size={28} />,
        title: "REST API Development",
        description:
            "Develop secure and scalable REST APIs with authentication and CRUD operations.",
    },
    {
        icon: <LayoutDashboard size={28} />,
        title: "Modern UI",
        description:
            "Create responsive and user-friendly interfaces with Tailwind CSS and React.",
    },
    {
        icon: <Brain size={28} />,
        title: "Problem Solving",
        description:
            "Enjoy learning new technologies and solving real-world programming challenges.",
    },
    {
        icon: <Users size={28} />,
        title: "Team Player",
        description:
            "Comfortable collaborating, learning from feedback, and working in team environments.",
    },
    {
        icon: <Rocket size={28} />,
        title: "Career Focus",
        description:
            "Seeking internship opportunities to gain industry experience and continue growing as a developer.",
    },
];

const WhyHireMe = () => {
    return (
        <section
            id="why-hire-me"
            className="bg-[#070B1A] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-violet-400">
                        Why Work With Me
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        What I Bring
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        As a Computer System Engineering student and aspiring Full Stack
                        Developer, I focus on writing clean code, building practical
                        projects, and continuously improving my technical skills.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8 transition duration-300 hover:border-violet-500"
                        >
                            <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-400">
                                {item.icon}
                            </div>

                            <h3 className="mb-4 text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="leading-8 text-slate-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;