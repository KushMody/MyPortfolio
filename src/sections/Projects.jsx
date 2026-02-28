import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react"; // Added icons
import { projects } from "../data/projects";

const Projects = ({ limit, layout = "list" }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="bg-[#0d0d0d] p-4 md:p-8 pt-20" id="projects">
            <div className="mx-auto max-w-7xl"> {/* Increased width for grid */}
                <div className="mb-12 max-w-5xl mx-auto"> {/* Centered header */}
                    <h2 className="text-[#c7ff00] font-[Outfit] font-bold tracking-widest text-sm uppercase mb-4">
                        Selected Works
                    </h2>
                    <h3 className="text-5xl font-[Outfit] font-black text-white leading-none">
                        {limit ? "FEATURED PROJECTS" : "ALL PROJECTS"}
                    </h3>
                </div>

                {layout === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="max-w-5xl mx-auto">
                        {displayedProjects.map((project) => (
                            <Link
                                key={project.id}
                                heading={project.title}
                                subheading={project.description}
                                imgSrc={project.image}
                                href={project.live || project.github}
                            />
                        ))}
                    </div>
                )}


                {/* Buttons Section */}
                {limit ? (
                    <div className="mt-16 flex justify-center">
                        <a
                            href="/projects"
                            className="group relative inline-flex items-center px-8 py-4 bg-[#141414] border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-[#c7ff00]/50 hover:bg-[#1a1a1a]"
                        >
                            <div className="absolute inset-0 w-full h-full bg-[#c7ff00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 font-[Outfit] font-bold text-white tracking-widest text-sm uppercase group-hover:text-[#c7ff00] transition-colors">
                                See All Projects
                            </span>
                            <ArrowRight className="relative z-10 ml-3 w-5 h-5 text-gray-500 group-hover:text-[#c7ff00] group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                    </div>
                ) : (
                    <div className="mt-16 flex justify-center">
                        <a
                            href="/"
                            className="group relative inline-flex items-center px-8 py-4 bg-[#141414] border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-[#1a1a1a]"
                        >
                            <span className="relative z-10 font-[Outfit] font-bold text-gray-400 tracking-widest text-sm uppercase group-hover:text-white transition-colors">
                                Back to Home
                            </span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col bg-[#141414] rounded-xl overflow-hidden border border-white/10 hover:border-[#c7ff00]/50 transition-all duration-300 h-full hover:shadow-[0_0_20px_-10px_rgba(199,255,0,0.15)]"
        >
            {/* Image Container - Reduced height */}
            <div className="relative h-40 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content - Compact padding */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[#c7ff00] text-[10px] font-bold font-[Outfit] tracking-widest uppercase bg-[#c7ff00]/10 px-2 py-0.5 rounded-full border border-[#c7ff00]/20">
                        {project.category || "Development"}
                    </span>
                    <span className="text-gray-600 text-[10px] font-bold font-[Manrope]">
                        {project.date || "2024"}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white font-[Outfit] mb-2 group-hover:text-[#c7ff00] transition-colors leading-tight line-clamp-1">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-4 font-[Manrope] flex-grow line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack Pills - Smaller */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies?.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md hover:bg-white/10 transition-colors">
                            {tech}
                        </span>
                    ))}
                    {project.technologies?.length > 3 && (
                        <span className="text-[10px] text-gray-500 px-1 py-1">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Links - Compact footer */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-xs font-bold text-gray-400 hover:text-white transition-colors gap-1.5 group/link"
                        >
                            <Github size={14} className="text-gray-500 group-hover/link:text-white transition-colors" />
                            Code
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-xs font-bold text-[#c7ff00] hover:text-[#c7ff00]/80 transition-colors gap-1.5 ml-auto group/live"
                        >
                            Live Demo
                            <ExternalLink size={14} className="transform group-hover/live:translate-x-1 group-hover/live:-translate-y-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 py-8 md:py-8 transition-colors duration-500 hover:border-[#c7ff00]"
        >
            <div className="relative z-10 w-full md:w-auto">
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="block text-3xl md:text-6xl font-black text-white md:text-gray-500 transition-colors duration-500 group-hover:text-white font-[Outfit] uppercase mb-2 md:mb-0"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative z-10 block text-sm md:text-base text-gray-400 font-[Manrope] max-w-sm md:mt-2">
                    {subheading}
                </span>

                {/* Mobile Image */}
                <img
                    src={imgSrc}
                    alt={heading}
                    className="w-full h-48 object-cover rounded-lg mt-4 mb-2 md:hidden border border-white/10"
                />
            </div>

            {/* Desktop Floating Image */}
            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 border-2 border-[#c7ff00] hidden md:block pointer-events-none"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4 hidden md:block"
            >
                <ArrowRight className="text-5xl text-white group-hover:text-[#c7ff00] transition-colors" />
            </motion.div>

            {/* Mobile Arrow */}
            <div className="md:hidden mt-4 self-end">
                <ArrowRight className="text-2xl text-[#c7ff00]" />
            </div>
        </motion.a>
    );
};

export default Projects;
