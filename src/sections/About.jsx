import React from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const About = () => {
    const education = [
        {
            degree: "Bachelor's in Computer Science (IoT)",
            school: "GH Patel College of Engineering and Technology",
            year: "Expected 2026",
            description: "Specialized in Internet of Things. Preparing for GATE CSE 2026."
        },
        {
            degree: "Higher Secondary Education (HSC)",
            school: "St. Xavier's High School",
            year: "Completed",
            description: "Science stream."
        },
        {
            degree: "Secondary School Certificate (SSC)",
            school: "Sheth Dhanjisha Rustamji Umrigar Memorial School",
            year: "Completed",
            description: "Schooling completed with focus on academics."
        }
    ];

    const experience = [
        {
            role: "Full Stack Developer",
            company: "Freelance / Projects",
            year: "Present",
            description: "Built web applications including a CA/CMA consultancy website, online shoe shopping platform, and Django-based authentication systems."
        },
        {
            role: "Game Developer",
            company: "Personal Projects",
            year: "Ongoing",
            description: "Developing games using C#, Unity, and Unreal Engine."
        },
        {
            role: "Event Coordinator",
            company: "Technica (College Event)",
            year: "College Years",
            description: "Coordinated technical events and served as a member during college fests."
        }
    ];

    return (
        <div className="py-20 bg-[#0d0d0d] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <SectionWrapper className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                        I am Kush Mody, a passionate Computer Science student with a good grasp of algorithms, data structures, and web development. I have hands-on experience with Django, ReactJS, AngularJS, Node.js, and MongoDB. Currently, I am preparing for GATE CSE 2026, aiming for a top score while balancing my interests in technology and fitness.
                    </p>
                </SectionWrapper>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education Section */}
                    <SectionWrapper delay={0.2}>
                        <div className="flex items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                            <GraduationCap size={24} className="text-gray-900 dark:text-white mr-3" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Education
                            </h3>
                        </div>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {edu.degree}
                                    </h4>
                                    <div className="text-gray-900 dark:text-white font-medium mb-2">
                                        {edu.school}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <Calendar size={14} className="mr-2" />
                                        {edu.year}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </SectionWrapper>

                    {/* Experience Section */}
                    <SectionWrapper delay={0.4}>
                        <div className="flex items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                            <Briefcase size={24} className="text-gray-900 dark:text-white mr-3" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Experience
                            </h3>
                        </div>
                        <div className="space-y-12">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {exp.role}
                                    </h4>
                                    <div className="text-gray-900 dark:text-white font-medium mb-2">
                                        {exp.company}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.year}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </SectionWrapper>
                </div>
            </div>
        </div>
    );
};

export default About;
