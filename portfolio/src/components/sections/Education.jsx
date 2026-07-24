import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
    return (
        <section
            id="education"
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
                        Education
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        My Academic Journey
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        My education has given me a strong foundation in software
                        engineering while I continue improving my practical skills
                        through projects and self-learning.
                    </p>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-slate-800 bg-[#0B1220] p-10 shadow-xl"
                >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                        {/* Left */}
                        <div className="flex gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                                <GraduationCap size={32} />
                            </div>

                            <div>

                                <h3 className="text-3xl font-bold">
                                    BSc (Hons) Computer System Engineering
                                </h3>

                                <p className="mt-3 text-lg text-violet-400">
                                    ISMT College, Nepal
                                </p>

                                <p className="mt-3 leading-8 text-slate-400">
                                    Affiliated with the University of Sunderland,
                                    United Kingdom.
                                </p>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-3 text-slate-400">
                                <Calendar size={18} />
                                <span>Currently Pursuing (Second Year)</span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin size={18} />
                                <span>Pokhara, Nepal</span>
                            </div>

                        </div>

                    </div>

                    {/* Subjects */}
                    <div className="mt-10">

                        <h4 className="mb-5 text-xl font-semibold">
                            Relevant Technologies
                        </h4>

                        <div className="flex flex-wrap gap-3">

                            {[
                                "Python",
                                "React",
                                "Django",
                                "REST APIs",
                                "Tailwind CSS",
                                "PostgreSQL",
                                "Git",
                                "Vercel",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;