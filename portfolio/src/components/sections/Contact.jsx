import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,

} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "../../constants/profile";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-white py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        CONTACT
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        Let's Work Together
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        I'm currently looking for internship opportunities and exciting
                        projects. Feel free to contact me anytime.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-12 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-5">
                            <Mail className="text-indigo-600" size={30} />
                            <div>
                                <h3 className="font-bold text-xl">Email</h3>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-slate-600 hover:text-indigo-600"
                                >
                                    {profile.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <Phone className="text-indigo-600" size={30} />
                            <div>
                                <h3 className="font-bold text-xl">Phone</h3>
                                <a
                                    href={`tel:${profile.phone}`}
                                    className="text-slate-600 hover:text-indigo-600"
                                >
                                    {profile.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <MapPin className="text-indigo-600" size={30} />
                            <div>
                                <h3 className="font-bold text-xl">Location</h3>
                                <p className="text-slate-600">{profile.location}</p>
                            </div>
                        </div>

                        <div className="flex gap-5 pt-6">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-slate-200 p-4 transition hover:bg-indigo-600 hover:text-white"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-slate-200 p-4 transition hover:bg-indigo-600 hover:text-white"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right */}

                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        action={`mailto:${profile.email}`}
                        method="POST"
                        encType="text/plain"
                        className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg"
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-600"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-600"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-600"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-600"
                        ></textarea>

                        <button
                            type="submit"
                            className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
                        >
                            Send Message
                            <Send size={18} />
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;