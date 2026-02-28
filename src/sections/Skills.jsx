import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Importing logos
import android from '../data/Logos/Android.png';
import angular from '../data/Logos/AngularJS.png';
import arduino from '../data/Logos/Arduino.png';
import csharp from '../data/Logos/CSharp.png';
import cpp from '../data/Logos/CPlusPlus.png';
import c from '../data/Logos/C.png';
import css from '../data/Logos/CSS3.png';
import django from '../data/Logos/Django.png';
import express from '../data/Logos/Express.png';
import git from '../data/Logos/Git.png';
import github from '../data/Logos/GitHub.png';
import gitlab from '../data/Logos/GitLab.png';
import html from '../data/Logos/HTML5.png';
import java from '../data/Logos/Java.png';
import js from '../data/Logos/JavaScript.png';
import mongodb from '../data/Logos/MongoDB.png';
import node from '../data/Logos/NodeJS.png';
import nodemon from '../data/Logos/Nodemon.png';
import postman from '../data/Logos/Postman.png';
import python from '../data/Logos/Python.png';
import rpi from '../data/Logos/RaspberryPi.png';
import reactLogo from '../data/Logos/React.png';
import tailwind from '../data/Logos/TailwindCSS.png';
import unity from '../data/Logos/Unity.png';
import vercel from '../data/Logos/Vercel.png';
import vscode from '../data/Logos/VSCode.png';
import visualstudio from '../data/Logos/VisualStudio.png';
import vite from '../data/Logos/ViteJS.png';

const Skills = () => {
    const containerRef = useRef(null);

    const skills = [
        { name: "React", icon: reactLogo, color: "#61DAFB" },
        { name: "JavaScript", icon: js, color: "#F7DF1E" },
        { name: "HTML5", icon: html, color: "#E34F26" },
        { name: "CSS3", icon: css, color: "#1572B6" },
        { name: "Tailwind CSS", icon: tailwind, color: "#38B2AC" },
        { name: "Node.js", icon: node, color: "#339933" },
        { name: "Express", icon: express, color: "#ffffff" },
        { name: "MongoDB", icon: mongodb, color: "#47A248" },
        { name: "Python", icon: python, color: "#3776AB" },
        { name: "Java", icon: java, color: "#007396" },
        { name: "C++", icon: cpp, color: "#00599C" },
        { name: "C#", icon: csharp, color: "#239120" },
        { name: "C", icon: c, color: "#A8B9CC" },
        { name: "Django", icon: django, color: "#092E20" },
        { name: "Angular", icon: angular, color: "#DD0031" },
        { name: "Unity", icon: unity, color: "#ffffff", invert: true },
        { name: "Android", icon: android, color: "#3DDC84" },
        { name: "Git", icon: git, color: "#F05032" },
        { name: "GitHub", icon: github, color: "#ffffff", invert: true },
        { name: "GitLab", icon: gitlab, color: "#FC6D26" },
        { name: "VS Code", icon: vscode, color: "#007ACC" },
        { name: "Visual Studio", icon: visualstudio, color: "#5C2D91" },
        { name: "Postman", icon: postman, color: "#FF6C37" },
        { name: "Vite", icon: vite, color: "#646CFF" },
        { name: "Vercel", icon: vercel, color: "#ffffff", invert: true },
        { name: "Nodemon", icon: nodemon, color: "#76D04B" },
        { name: "Arduino", icon: arduino, color: "#00979D" },
        { name: "Raspberry Pi", icon: rpi, color: "#C51A4A" },
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#0d0d0d] text-white py-20 px-4 overflow-hidden flex flex-col items-center justify-center" id="skills">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-black font-[Outfit] uppercase mb-4">
                    Technical <span className="text-[#c7ff00]">Arsenal</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The tools and technologies I use to bring ideas to life.
                </p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 max-w-7xl relative z-10 w-full px-2">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial="initial"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            initial: { opacity: 0, scale: 0.5, y: 20 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.02,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }
                            },
                            hover: {
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }
                        }}
                        className="group relative flex flex-col items-center justify-center aspect-square bg-[#141414]/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[#c7ff00]/50 transition-colors duration-300"
                    >
                        <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className={`w-10 h-10 md:w-14 md:h-14 object-contain transition-all duration-300 group-hover:scale-110 ${skill.invert ? 'brightness-0 invert' : ''}`}
                            variants={{
                                hover: { filter: `drop-shadow(0 0 15px ${skill.color})` }
                            }}
                        />

                        <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-300 whitespace-nowrap z-20 hidden md:block">
                            <span className="text-sm font-bold text-white font-[Outfit] tracking-wide bg-black/80 px-2 py-1 rounded border border-white/10" style={{ color: skill.color }}>
                                {skill.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background elements for depth */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c7ff00] rounded-full blur-[150px] mix-blend-screen opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] mix-blend-screen opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

        </section>
    );
};

export default Skills;
