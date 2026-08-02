import { motion } from "framer-motion";
import {
    Rocket,
    ArrowRight,
    Download,
    Briefcase,
    Users,
    Code2,
    BookOpen,
    Lightbulb,
} from "lucide-react";

const opportunities = [
    { title: "Full Stack Developer Internship", icon: Briefcase },
    { title: "Collaborative Projects", icon: Users },
    { title: "Modern Web Development", icon: Code2 },
    { title: "Continuous Learning", icon: BookOpen },
    { title: "Problem Solving", icon: Lightbulb },
];

const LetsBuildTogether = () => {
    return (
        <section id="lets-build-together" className="section bg-slate-50">
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
                        LET'S BUILD TOGETHER
                    </p>

                    <h2 className="heading-lg mt-6">
                        Open For Internship Opportunities
                    </h2>

                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        I’m always excited to collaborate, learn and contribute to meaningful projects.
                        If you're looking for a dedicated Full Stack Developer intern, let's connect.
                    </p>
                </motion.div>

                {/* Opportunity Cards */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {opportunities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="card text-center"
                            >
                                <div className="flex justify-center">
                                    <div className="rounded-xl bg-indigo-100 p-4">
                                        <Icon size={24} className="text-indigo-600" />
                                    </div>
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 card text-center"
                >
                    <Rocket size={40} className="mx-auto text-indigo-600" />

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                        Building, Learning & Growing Every Day
                    </h3>

                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        I enjoy solving problems, building scalable systems and continuously
                        improving my development skills through real-world projects.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <div className="mt-20 flex flex-wrap justify-center gap-6">
                    <a href="#projects" className="btn-primary">
                        View My Projects
                        <ArrowRight size={18} />
                    </a>

                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                        <Download size={18} />
                        Download Resume
                    </a>

                    <a href="#contact" className="btn-primary">
                        Say Hello
                    </a>
                </div>

            </div>
        </section>
    );
};

export default LetsBuildTogether;