import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../constants/profile";

const Contact = () => {
    return (
        <section id="contact" className="section bg-white">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        CONTACT
                    </p>

                    <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900">
                        Let’s Build Something Meaningful
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        I’m currently seeking internship opportunities where I can
                        contribute, learn and grow as a Full Stack Developer.
                        Let’s connect and create something impactful.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="mt-24 grid gap-20 lg:grid-cols-2 items-start">

                    {/* Left Info */}
                    <div className="space-y-8">

                        {[
                            { icon: Mail, label: "Email", value: profile.email },
                            { icon: Phone, label: "Phone", value: profile.phone },
                            { icon: MapPin, label: "Location", value: profile.location },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-6 rounded-3xl bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="rounded-2xl bg-indigo-100 p-4">
                                        <Icon className="text-indigo-600" size={22} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            {item.label}
                                        </p>

                                        <p className="font-semibold text-slate-800">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Social */}
                        <div className="flex gap-6 pt-6">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:bg-indigo-600 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:bg-indigo-600 hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>

                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-[36px] bg-slate-50 p-10 shadow-sm"
                    >
                        <div className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full rounded-2xl border border-slate-300 px-6 py-4 text-sm focus:border-indigo-600 focus:outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full rounded-2xl border border-slate-300 px-6 py-4 text-sm focus:border-indigo-600 focus:outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="w-full rounded-2xl border border-slate-300 px-6 py-4 text-sm focus:border-indigo-600 focus:outline-none"
                            />

                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full rounded-2xl border border-slate-300 px-6 py-4 text-sm focus:border-indigo-600 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                Send Message
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-600 group-hover:translate-x-1 transition">
                                    <Send size={16} />
                                </span>
                            </button>

                        </div>
                    </motion.form>

                </div>

            </div>
        </section>
    );
};

export default Contact;