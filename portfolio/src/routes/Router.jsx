import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import ProjectDetail from "../pages/ProjectDetail";

import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route
                path="/project/:slug"
                element={<ProjectDetail />}
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;