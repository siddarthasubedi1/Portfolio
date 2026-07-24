import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Download,
    Send,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#070B1A] py-24 text-white"
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
                        Contact
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Let's Work Together
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        I'm currently looking for internship opportunities where I
                        can contribute, learn from experienced developers and grow
                        as a Full Stack Developer.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8"
                    >
                        <h3 className="mb-8 text-2xl font-bold">
                            Contact Information
                        </h3>

                        <div className="space-y-8">

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Email
                                    </h4>

                                    <a
                                        href="mailto:siddarthasubedi123@gmail.com"
                                        className="mt-2 block text-slate-400 hover:text-violet-400"
                                    >
                                        siddarthasubedi123@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                                    <Phone size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Phone
                                    </h4>

                                    <p className="mt-2 text-slate-400">
                                        +977-9826606151
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Location
                                    </h4>

                                    <p className="mt-2 text-slate-400">
                                        Pokhara, Nepal
                                    </p>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8"
                    >
                        <h3 className="mb-8 text-2xl font-bold">
                            Quick Actions
                        </h3>

                        <div className="space-y-5">

                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-700"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>

                            <a
                                href="mailto:siddarthasubedi123@gmail.com"
                                className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 px-6 py-4 transition hover:border-violet-500 hover:bg-slate-900"
                            >
                                <Send size={20} />
                                Send Email
                            </a>

                            <a
                                href="https://github.com/siddarthasubedi1"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 px-6 py-4 transition hover:border-violet-500 hover:bg-slate-900"
                            >
                                <FaGithub size={20} />
                                GitHub Profile
                            </a>

                        </div>

                        <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">

                            <h4 className="text-xl font-semibold text-violet-400">
                                Open to Opportunities
                            </h4>

                            <p className="mt-4 leading-8 text-slate-400">
                                I'm actively seeking internships and junior developer
                                opportunities where I can contribute, continue learning,
                                and grow as a Full Stack Developer.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;