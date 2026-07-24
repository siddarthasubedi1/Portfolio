import { Link } from "react-router-dom";

function NotFound() {
    return (

        <div
            className="
      flex
      min-h-screen
      items-center
      justify-center
      flex-col
      gap-5
      "
        >

            <h1 className="text-6xl font-bold">
                404
            </h1>


            <p>
                Page Not Found
            </p>


            <Link
                to="/"
                className="
        px-5
        py-3
        rounded-xl
        border
        "
            >
                Go Home
            </Link>

        </div>

    );
}

export default NotFound;