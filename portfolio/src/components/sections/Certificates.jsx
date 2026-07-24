import { motion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="scroll-mt-32 bg-[#070B1A] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-violet-400">
                        Certifications
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Learning Beyond the Classroom
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        I actively participate in workshops and practical learning
                        opportunities to strengthen my design and development skills.
                    </p>
                </motion.div>

                {/* Certificate Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8 shadow-xl transition-all duration-300 hover:border-violet-500"
                >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                        <div className="flex gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                                <Award size={30} />
                            </div>

                            <div>

                                <h3 className="text-2xl font-bold">
                                    UI/UX Design Workshop
                                </h3>

                                <p className="mt-2 text-violet-400">
                                    ISMT College, Nepal
                                </p>

                                <p className="mt-5 leading-8 text-slate-400">
                                    Successfully completed a five-day UI/UX Design Workshop
                                    focused on user interface design, user experience,
                                    wireframing, design thinking and modern design principles.
                                </p>

                            </div>

                        </div>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3 text-slate-400">
                                <Building2 size={18} />
                                <span>ISMT College</span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-400">
                                <Calendar size={18} />
                                <span>Workshop Certificate</span>
                            </div>

                        </div>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">

                        {[
                            "UI Design",
                            "UX Design",
                            "Wireframing",
                            "Design Thinking",
                            "Figma Basics",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Certificates;