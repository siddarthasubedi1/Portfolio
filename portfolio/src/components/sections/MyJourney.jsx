import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Code2,
    Trophy,
} from "lucide-react";

const journey = [
    {
        year: "2022",
        icon: GraduationCap,
        title: "Higher Secondary Education",
        subtitle: "Kalika Secondary School",
        description:
            "Completed Higher Secondary Education in the Science stream, developing analytical thinking and a strong foundation in mathematics and computer science.",
    },
    {
        year: "2023 - Present",
        icon: GraduationCap,
        title: "BSc (Hons) Computer System Engineering",
        subtitle: "ISMT College, Pokhara",
        description:
            "Currently pursuing a bachelor's degree while focusing on software engineering, databases, networking, and full-stack web development.",
    },
    {
        year: "2024",
        icon: Code2,
        title: "Started Full Stack Development",
        subtitle: "React + Django REST Framework",
        description:
            "Built multiple full-stack applications using React, Django REST Framework, PostgreSQL, JWT authentication, REST APIs, and responsive UI design.",
    },
    {
        year: "2024 - Present",
        icon: Briefcase,
        title: "Personal Projects",
        subtitle: "Portfolio & Ecommerce",
        description:
            "Developed portfolio websites, authentication systems, and e-commerce applications to strengthen backend architecture and frontend development skills.",
    },
    {
        year: "Current Goal",
        icon: Trophy,
        title: "Seeking Internship",
        subtitle: "Full Stack Developer",
        description:
            "Actively looking for internship opportunities where I can contribute, learn from experienced developers, and build scalable web applications.",
    },
];

const MyJourney = () => {
    return (
        <section id="journey" className="section section-gradient">
            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        MY JOURNEY
                    </p>

                    <h2 className="heading-lg mt-6">
                        Learning Through Experience
                    </h2>

                    <p className="text-muted mx-auto mt-8 max-w-3xl text-lg">
                        Every project, course and challenge has helped shape my journey
                        toward becoming a Full Stack Developer.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mx-auto mt-24 max-w-5xl">
                    {/* Center Line */}
                    <div className="absolute left-6 top-0 h-full w-1 rounded bg-indigo-100 md:left-1/2 md:-translate-x-1/2"></div>

                    <div className="space-y-16">
                        {journey.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {/* Card Wrapper */}
                                    <div className="ml-16 w-full md:ml-0 md:w-1/2 md:px-10">
                                        <div className="card p-8 transition hover:-translate-y-2 hover:shadow-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="rounded-2xl bg-indigo-100 p-3 dark:bg-indigo-500/10">
                                                    <Icon size={26} className="text-indigo-600" />
                                                </div>

                                                <div>
                                                    <p className="font-bold text-indigo-600">
                                                        {item.year}
                                                    </p>

                                                    <h3 className="text-xl font-bold">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-muted mt-6">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-6 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-indigo-600 md:left-1/2 md:-translate-x-1/2"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyJourney;