import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import AllProjectsPage from "./pages/AllProjectsPage";

const Home = React.lazy(() => import("./sections/Home"));
const About = React.lazy(() => import("./sections/About"));
const Projects = React.lazy(() => import("./sections/Projects"));
const Skills = React.lazy(() => import("./sections/Skills"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d]">
    <div className="w-16 h-16 border-4 border-[#c7ff00] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects limit={3} />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <Footer />
  </>
);

// Main App
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Fake loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        localStorage.setItem("scrollPosition", window.scrollY.toString());
      }
    };

    // Debounce scroll save
    let timeoutId;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll);

    // Restore scroll on mount/reload
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      // Delay slightly to ensure DOM is ready and override ScrollToTop
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
      }, 100); // Small delay
    }

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <SmoothScroll>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-[#0d0d0d] text-[#eaeaea] transition-colors duration-300 relative selection:bg-[#c7ff00] selection:text-black">
              <React.Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/projects" element={<AllProjectsPage />} />
                </Routes>
              </React.Suspense>
            </div>
          </Router>
        </SmoothScroll>
      )}
    </ThemeProvider>
  );
};

export default App;