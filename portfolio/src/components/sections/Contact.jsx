import { useState } from "react";
import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    Send,
    Sparkles,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import profile from "../../constants/profile";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject =
            form.subject.trim() ||
            "Portfolio Contact";

        const body = `
Hello Siddartha,

${form.message}

Name: ${form.name}
Email: ${form.email}
        `.trim();

        const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    };

    return (
        <section
            id="contact"
            className="
                relative overflow-hidden
                bg-white
                py-20 sm:py-24 lg:py-28
            "
        >
            {/* BACKGROUND */}

            <div
                className="
                    pointer-events-none
                    absolute -right-40 top-20
                    h-96 w-96
                    rounded-full
                    bg-green-100/60
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -left-40 bottom-0
                    h-80 w-80
                    rounded-full
                    bg-emerald-100/40
                    blur-[120px]
                "
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >
                    <span className="section-badge">
                        <Mail size={14} />
                        Contact
                    </span>

                    <h2 className="section-title">
                        Have an opportunity?
                        <span className="text-green-600">
                            {" "}
                            Let&apos;s talk.
                        </span>
                    </h2>

                    <p className="section-description">
                        I&apos;m currently interested in Full Stack
                        Developer internship opportunities,
                        collaborative development projects and
                        opportunities to gain practical industry
                        experience.
                    </p>

                </motion.div>

                {/* CONTACT GRID */}

                <div
                    className="
                        mx-auto
                        mt-12
                        grid max-w-6xl
                        gap-6
                        lg:grid-cols-[0.82fr_1.18fr]
                    "
                >
                    {/* =============================
                        LEFT
                    ============================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[24px]
                            bg-slate-900
                            p-6
                            text-white
                            sm:p-8
                        "
                    >
                        {/* DECORATION */}

                        <div
                            className="
                                pointer-events-none
                                absolute -right-16 -top-16
                                h-56 w-56
                                rounded-full
                                bg-green-500/15
                                blur-[70px]
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute -bottom-20 -left-20
                                h-48 w-48
                                rounded-full
                                bg-emerald-500/10
                                blur-[70px]
                            "
                        />

                        <div className="relative z-10">

                            <div
                                className="
                                    flex items-center gap-2
                                    text-green-400
                                "
                            >
                                <Sparkles size={14} />

                                <p
                                    className="
                                        text-xs font-bold
                                        uppercase
                                        tracking-[0.17em]
                                        text-green-400
                                    "
                                >
                                    Get In Touch
                                </p>
                            </div>

                            <h3
                                className="
                                    mt-3
                                    text-2xl font-bold
                                    text-white
                                    sm:text-3xl
                                "
                            >
                                Let&apos;s connect.
                            </h3>

                            <p
                                className="
                                    mt-3
                                    max-w-md
                                    text-sm leading-7
                                    text-slate-300
                                "
                            >
                                The easiest way to reach me is by
                                email or LinkedIn. I&apos;d be happy
                                to discuss internships, development
                                work or collaboration.
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
                                        transition-all
                                        duration-300
                                        hover:translate-x-1
                                        hover:border-green-500/30
                                        hover:bg-white/10
                                    "
                                >
                                    <span
                                        className="
                                            flex h-10 w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <Mail size={17} />
                                    </span>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[11px]
                                                text-slate-400
                                            "
                                        >
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
                                            ml-auto
                                            shrink-0
                                            text-slate-400
                                            transition-transform
                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                            group-hover:text-green-400
                                        "
                                    />
                                </a>

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="
                                        group
                                        flex items-center
                                        gap-3
                                        rounded-xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:translate-x-1
                                        hover:border-green-500/30
                                        hover:bg-white/10
                                    "
                                >
                                    <span
                                        className="
                                            flex h-10 w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <Phone size={17} />
                                    </span>

                                    <div>

                                        <p
                                            className="
                                                text-[11px]
                                                text-slate-400
                                            "
                                        >
                                            Phone
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                font-semibold
                                                text-white
                                            "
                                        >
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
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-green-600
                                        "
                                    >
                                        <MapPin size={17} />
                                    </span>

                                    <div>

                                        <p
                                            className="
                                                text-[11px]
                                                text-slate-400
                                            "
                                        >
                                            Location
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {profile.location}
                                        </p>

                                    </div>
                                </div>

                            </div>

                            {/* SOCIAL */}

                            <div className="mt-7">

                                <p
                                    className="
                                        mb-3
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.15em]
                                        text-slate-500
                                    "
                                >
                                    Find Me Online
                                </p>

                                <div className="flex gap-2">

                                    <a
                                        href={profile.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="
                                            flex h-10 w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border border-white/10
                                            bg-white/5
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
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
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border border-white/10
                                            bg-white/5
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-green-500
                                            hover:bg-green-600
                                        "
                                    >
                                        <FaLinkedinIn size={17} />
                                    </a>

                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* =============================
                        RIGHT
                    ============================= */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
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
                            Tell me what you&apos;d like to discuss.
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm leading-6
                                text-slate-500
                            "
                        >
                            Fill in the details below and the button
                            will prepare the message in your default
                            email application.
                        </p>

                        {/* FORM */}

                        <div
                            className="
                                mt-7
                                grid gap-4
                                sm:grid-cols-2
                            "
                        >
                            <Field
                                label="Name"
                                name="name"
                                type="text"
                                value={form.name}
                                placeholder="Your name"
                                onChange={handleChange}
                                required
                            />

                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                placeholder="your@email.com"
                                onChange={handleChange}
                                required
                            />

                            <div className="sm:col-span-2">
                                <Field
                                    label="Subject"
                                    name="subject"
                                    type="text"
                                    value={form.subject}
                                    placeholder="Internship opportunity"
                                    onChange={handleChange}
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
                                    name="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    required
                                />

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="
                                btn-primary btn-arrow
                                mt-5
                                w-full
                                sm:w-auto
                            "
                        >
                            <Send size={16} />

                            Prepare Email
                        </button>

                        <p
                            className="
                                mt-3
                                text-[11px]
                                leading-5
                                text-slate-400
                            "
                        >
                            This portfolio does not store your form
                            information. Your email application handles
                            the message.
                        </p>

                    </motion.form>

                </div>
            </div>
        </section>
    );
};

const Field = ({
    label,
    name,
    type,
    value,
    placeholder,
    onChange,
    required = false,
}) => {
    const id = `contact-${name}`;

    return (
        <div>
            <label
                htmlFor={id}
                className="
                    mb-2 block
                    text-xs font-bold
                    text-slate-700
                "
            >
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default Contact;