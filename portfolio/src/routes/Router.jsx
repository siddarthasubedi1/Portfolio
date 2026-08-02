import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "project/:slug", element: <ProjectDetails /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;