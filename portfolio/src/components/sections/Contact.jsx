import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../constants/profile";

const Contact = () => {
    return (
        <section id="contact" className="section bg-slate-50">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        CONTACT
                    </p>

                    <h2 className="heading-lg mt-6">
                        Let's Work Together
                    </h2>

                    <p className="mt-6 text-body max-w-3xl mx-auto">                        I’m currently looking for internship opportunities and meaningful projects.
                        Feel free to reach out.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="mt-24 grid gap-20 lg:grid-cols-2 items-start">

                    {/* Left Info */}
                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: "Email", value: profile.email },
                            { icon: Phone, label: "Phone", value: profile.phone },
                            { icon: MapPin, label: "Location", value: profile.location },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <Icon className="text-indigo-600" size={24} />
                                    <div>
                                        <p className="text-sm text-slate-500">{item.label}</p>
                                        <p className="font-semibold text-slate-800">{item.value}</p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Social */}
                        <div className="flex gap-4 pt-6">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:text-indigo-600 hover:shadow-lg"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:text-indigo-600 hover:shadow-lg"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
                    >
                        <div className="space-y-6">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea rows={5} placeholder="Your Message" required />

                            <button
                                type="submit"
                                className="btn-primary w-full py-4 text-lg"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;