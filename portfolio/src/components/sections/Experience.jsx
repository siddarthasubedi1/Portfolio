// src/components/sections/Experience.jsx

import SectionHeading from "../ui/SectionHeading";

function Experience() {
    return (
        <section
            className="
      py-32
      px-8
      "
        >
            <div className="max-w-6xl mx-auto">

                <SectionHeading
                    title="Experience"
                    subtitle="My professional experience."
                />

                <div
                    className="
          border
          rounded-2xl
          p-10
          "
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