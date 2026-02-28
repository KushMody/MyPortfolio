import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Only spy on sections if we are on the home page
            if (location.pathname !== "/") return;

            const sections = ["home", "about", "projects", "skills", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Handle cross-page navigation scrolling
    useEffect(() => {
        if (location.pathname === "/" && location.state?.targetId) {
            const targetId = location.state.targetId;
            const attemptScroll = (attempts = 0) => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                } else if (attempts < 20) {
                    setTimeout(() => attemptScroll(attempts + 1), 100);
                }
            };
            attemptScroll();
        }
    }, [location]);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname !== "/") {
            navigate("/", { state: { targetId: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const navLinks = [
        { name: "HOME", path: "home" },
        { name: "ABOUT", path: "about" },
        { name: "WORK", path: "projects" },
        { name: "SKILLS", path: "skills" },
        { name: "CONTACT", path: "contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5 py-4" : "py-6 bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-center items-center relative">

                {/* Logo - Absolute Left on Desktop */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    className="group text-2xl font-[Outfit] font-black tracking-tighter text-white md:absolute md:left-6 flex items-center gap-1"
                >
                    KUSH MODY
                    <span className="text-[#c7ff00] w-2 h-2 rounded-full bg-[#c7ff00] transition-all duration-300 group-hover:w-4 group-hover:h-2"></span>
                </a>

                {/* Mobile Menu Button - Absolute Right */}
                <button
                    className="md:hidden text-white hover:text-[#c7ff00] transition-colors relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex items-center space-x-2 bg-white/5 px-2 py-2 rounded-full border border-white/5 backdrop-blur-md shadow-2xl">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.path)}
                            className={`px-6 py-2 rounded-full text-xs font-[Outfit] font-bold tracking-widest transition-all duration-300 relative overflow-hidden ${activeSection === link.path ? "text-black bg-[#c7ff00]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <span className="relative z-10">{link.name}</span>
                        </button>
                    ))}
                </div>

                {/* Mobile Navigation Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-[#0d0d0d] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {/* Noise Overlay for Mobile Menu */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E')]"></div>

                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.path)}
                                className={`text-4xl font-[Outfit] font-black tracking-tighter ${activeSection === link.path ? "text-[#c7ff00]" : "text-white/50"}`}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
