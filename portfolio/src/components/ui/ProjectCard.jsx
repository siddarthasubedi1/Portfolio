import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (

        <div
            className="
      border
      rounded-3xl
      p-8
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
        >

            <h2
                className="
      text-3xl
      font-bold
      "
            >
                {project.title}
            </h2>


            <p
                className="
      mt-5
      text-gray-600
      dark:text-gray-400
      "
            >
                {project.description}
            </p>


            <div
                className="
      flex
      flex-wrap
      gap-3
      mt-8
      "
            >

                {

                    project.technologies.map((item, index) => (

                        <span

                            key={index}

                            className="
          border
          rounded-full
          px-4
          py-2
          "

                        >

                            {item}

                        </span>

                    ))

                }

            </div>


            <div
                className="
      flex
      gap-5
      mt-10
      flex-wrap
      "
            >

                <Link

                    to={`/project/${project.id}`}

                    className="
        border
        px-5
        py-3
        rounded-xl
        "

                >

                    View Details

                </Link>


                <a

                    href={project.github}

                    target="_blank"

                    className="
        border
        px-5
        py-3
        rounded-xl
        "

                >

                    Github

                </a>


            </div>

        </div>

    );
}

export default ProjectCard;