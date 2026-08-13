import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import profile from "../../constants/profile";

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="section-badge">
                        <Mail size={14} />
                        Contact
                    </span>

                    <h2 className="section-title">
                        Have an opportunity?
                        <span className="text-green-600">
                            {" "}
                            Let's talk.
                        </span>
                    </h2>

                    <p className="section-description">
                        I'm currently interested in Full Stack Developer
                        internship opportunities, collaborative development
                        projects and opportunities to gain practical industry
                        experience.
                    </p>
                </motion.div>

                <div
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        gap-6
                        lg:grid-cols-[0.8fr_1.2fr]
                    "
                >

                    {/* LEFT INFORMATION */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="
                            relative overflow-hidden
                            rounded-[24px]
                            bg-slate-900
                            p-6
                            text-white
                            sm:p-8
                        "
                    >
                        <div
                            className="
                                absolute -right-16 -top-16
                                h-56 w-56
                                rounded-full
                                bg-green-500/15
                                blur-[70px]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    text-xs font-bold
                                    uppercase tracking-[0.17em]
                                    text-green-400
                                "
                            >
                                Get In Touch
                            </p>

                            <h3
                                className="
                                    mt-3
                                    text-2xl font-bold
                                    text-white
                                "
                            >
                                Let's connect.
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-sm leading-7
                                    text-slate-300
                                "
                            >
                                The easiest way to reach me is by email or
                                LinkedIn. I'll respond when I'm available.
                            </p>

                            {/* DETAILS */}
                            <div className="mt-8 space-y-3">

                                <a
                                    href={`mailto:${profile.email}`}
                                    className="
                                        group
                                        flex items-center
                                        gap-3
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                        transition
                                        hover:border-green-500/30
                                        hover:bg-white/10
                                    "
                                >
                                    <span
                                        className="
                                            flex h-10 w-10
                                            shrink-0
                                            items-center justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <Mail size={17} />
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-[11px] text-slate-400">
                                            Email
                                        </p>

                                        <p
                                            className="
                                                truncate
                                                text-sm
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {profile.email}
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={15}
                                        className="
                                            ml-auto shrink-0
                                            text-slate-400
                                            transition-colors
                                            group-hover:text-green-400
                                        "
                                    />
                                </a>

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="
                                        flex items-center
                                        gap-3
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                        transition
                                        hover:bg-white/10
                                    "
                                >
                                    <span
                                        className="
                                            flex h-10 w-10
                                            shrink-0
                                            items-center justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <Phone size={17} />
                                    </span>

                                    <div>
                                        <p className="text-[11px] text-slate-400">
                                            Phone
                                        </p>

                                        <p className="text-sm font-semibold text-white">
                                            {profile.phone}
                                        </p>
                                    </div>
                                </a>

                                <div
                                    className="
                                        flex items-center
                                        gap-3
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                    "
                                >
                                    <span
                                        className="
                                            flex h-10 w-10
                                            shrink-0
                                            items-center justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <MapPin size={17} />
                                    </span>

                                    <div>
                                        <p className="text-[11px] text-slate-400">
                                            Location
                                        </p>

                                        <p className="text-sm font-semibold text-white">
                                            {profile.location}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* SOCIAL */}
                            <div
                                className="
                                    mt-7
                                    flex items-center gap-2
                                "
                            >
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        text-white
                                        transition
                                        hover:border-green-500
                                        hover:bg-green-600
                                    "
                                >
                                    <FaGithub size={17} />
                                </a>

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        text-white
                                        transition
                                        hover:border-green-500
                                        hover:bg-green-600
                                    "
                                >
                                    <FaLinkedinIn size={17} />
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="
                            portfolio-card
                            p-6 sm:p-8
                        "
                    >
                        <p
                            className="
                                text-xs font-bold
                                uppercase
                                tracking-[0.16em]
                                text-green-600
                            "
                        >
                            Send a Message
                        </p>

                        <h3
                            className="
                                mt-2
                                text-xl font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            Tell me what you'd like to discuss.
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm leading-6
                                text-slate-500
                            "
                        >
                            This button opens your email application with my
                            email address ready.
                        </p>

                        <div
                            className="
                                mt-7
                                grid gap-4
                                sm:grid-cols-2
                            "
                        >
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="
                                        mb-2 block
                                        text-xs font-bold
                                        text-slate-700
                                    "
                                >
                                    Name
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="
                                        mb-2 block
                                        text-xs font-bold
                                        text-slate-700
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contact-subject"
                                    className="
                                        mb-2 block
                                        text-xs font-bold
                                        text-slate-700
                                    "
                                >
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="Internship opportunity"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contact-message"
                                    className="
                                        mb-2 block
                                        text-xs font-bold
                                        text-slate-700
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    rows="5"
                                    placeholder="Write your message..."
                                />
                            </div>
                        </div>

                        <a
                            href={`mailto:${profile.email}`}
                            className="
                                btn-primary
                                mt-5 w-full
                                sm:w-auto
                            "
                        >
                            <Send size={16} />
                            Email Me
                        </a>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;