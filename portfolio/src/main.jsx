import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import router from "./routes/Router";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/ui/Loader";

import "./index.css";

/* ==========================================
   App Wrapper
========================================== */

function AppWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      )}
    </AnimatePresence>
  );
}

/* ==========================================
   React Root
========================================== */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);