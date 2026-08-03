import { motion } from "framer-motion";
import {
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Code2,
    Laptop,
} from "lucide-react";

const cards = [
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "BSc (Hons) Computer System Engineering at ISMT College, Pokhara.",
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "Building scalable applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Open To Work",
        description:
            "Actively seeking Full Stack Developer internship opportunities.",
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Pokhara, Nepal",
    },
];

export default function About() {
    return (
        <section id="about" className="section bg-slate-50">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        ABOUT ME
                    </p>

                    <h2 className="heading-lg mt-6 max-w-3xl mx-auto">
                        Building Modern Full Stack Applications
                    </h2>

                    <p className="mt-6 text-body max-w-2xl mx-auto">
                        I'm a Computer System Engineering student passionate about building
                        scalable, secure and maintainable web applications using modern
                        full stack technologies.
                    </p>
                </motion.div>

                {/* My Goal Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-lg border border-slate-200 text-center">

                        {/* Accent Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

                        <div className="flex justify-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
                                <Laptop size={24} />
                            </div>
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-slate-900">
                            My Goal
                        </h3>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
                            To become a professional Full Stack Developer by building scalable,
                            user-focused systems and continuously improving my technical skills.
                        </p>

                        <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-6 py-3 text-sm font-semibold text-indigo-700">
                            Currently Looking For: Full Stack Internship
                        </div>

                    </div>
                </motion.div>

                {/* Info Cards */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex justify-center">
                                    <div className="rounded-xl bg-indigo-100 p-4">
                                        <Icon size={22} className="text-indigo-600" />
                                    </div>
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-slate-900">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}