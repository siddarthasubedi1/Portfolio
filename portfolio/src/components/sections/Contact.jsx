import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../constants/profile";

const Contact = () => {
    return (
        <section id="contact" className="section section-gradient">
            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        CONTACT
                    </p>

                    <h2 className="heading-lg mt-6">
                        Let's Work Together
                    </h2>

                    <p className="text-muted mx-auto mt-8 max-w-3xl text-lg">
                        I'm currently looking for internship opportunities and exciting
                        projects. Feel free to contact me anytime.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="mt-20 grid gap-12 lg:grid-cols-2 items-start">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Email */}
                        <div className="card p-6 flex items-center gap-5">
                            <Mail className="text-indigo-600" size={26} />
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-muted hover:text-indigo-600 transition"
                                >
                                    {profile.email}
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="card p-6 flex items-center gap-5">
                            <Phone className="text-indigo-600" size={26} />
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <a
                                    href={`tel:${profile.phone}`}
                                    className="text-muted hover:text-indigo-600 transition"
                                >
                                    {profile.phone}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="card p-6 flex items-center gap-5">
                            <MapPin className="text-indigo-600" size={26} />
                            <div>
                                <h3 className="font-semibold text-lg">Location</h3>
                                <p className="text-muted">{profile.location}</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="card p-4 transition hover:bg-indigo-600 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="card p-4 transition hover:bg-indigo-600 hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        action={`mailto:${profile.email}`}
                        method="POST"
                        encType="text/plain"
                        className="card p-8 space-y-5"
                    >
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea rows={6} placeholder="Your Message" required />

                        <button type="submit" className="btn-primary px-8 py-4 w-full sm:w-auto">
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