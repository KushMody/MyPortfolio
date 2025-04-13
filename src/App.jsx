import React from "react";
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../components/Home";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import NotFound from "../components/NotFound";


const pageVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Track current route location

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} style={{ position: "relative" }}>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <AnimatedRoutes />
      </div>
    ),
    children: [
      { index: true, element: <PageTransition><Home /></PageTransition> },
      { path: "resume", element: <PageTransition><Resume /></PageTransition> },
      { path: "projects", element: <PageTransition><Projects /></PageTransition> },
      { path: "*", element: <PageTransition><NotFound /></PageTransition> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;