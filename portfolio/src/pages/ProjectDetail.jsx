import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return (
            <h1 className="text-center mt-32 text-5xl">
                Project Not Found
            </h1>
        );
    }

    return (
        <section
            className="
      max-w-6xl
      mx-auto
      px-6
      py-28
      "
        >
            <img
                src={project.image}
                alt={project.title}
                className="
        w-full
        h-[400px]
        object-cover
        rounded-3xl
        "
            />

            <h1
                className="
        text-5xl
        font-bold
        mt-10
        "
            >
                {project.title}
            </h1>

            <p
                className="
        mt-8
        text-lg
        leading-8
        "
            >
                {project.description}
            </p>

            <h2
                className="
        text-3xl
        font-bold
        mt-16
        "
            >
                Technologies
            </h2>

            <div
                className="
        flex
        flex-wrap
        gap-3
        mt-6
        "
            >
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
            border
            rounded-full
            px-4
            py-2
            "
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <h2
                className="
        text-3xl
        font-bold
        mt-16
        "
            >
                Features
            </h2>

            <ul className="mt-6 space-y-4">
                {project.features.map(
                    (feature) => (
                        <li key={feature}>
                            • {feature}
                        </li>
                    )
                )}
            </ul>

            <div
                className="
        flex
        gap-4
        mt-16
        flex-wrap
        "
            >
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          "
                >
                    Github Repository
                </a>

                <Link
                    to="/"
                    className="
          border
          px-6
          py-3
          rounded-xl
          "
                >
                    Back Home
                </Link>
            </div>
        </section>
    );
};

export default ProjectDetail;