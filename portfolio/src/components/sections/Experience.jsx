// src/components/sections/Experience.jsx

import SectionHeading from "../ui/SectionHeading";

function Experience() {
    return (
        <section
            className="bg-slate-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <SectionHeading
                    title="Experience"
                    subtitle="My professional experience."
                />

                <div
                    className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg"
                >
                    <h2 className="text-2xl font-bold">
                        Driving Instructor
                    </h2>

                    <p className="mt-4">
                        Advance Driving Institute
                    </p>

                    <p className="mt-4">
                        Pokhara, Nepal
                    </p>

                    <p className="mt-4">
                        2 Years Experience
                    </p>

                </div>
            </div>
        </section>
    );
}

export default Experience;