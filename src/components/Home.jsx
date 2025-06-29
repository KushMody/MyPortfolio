import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import GitHub from "./photos/github.png";
import WhatsApp from "./photos/whatsapp.png";
import Email from "./photos/email.png";
import LinkedIn from "./photos/linkedin.png";
import MyImg from "./photos/Onlineanimatedimage.png";

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['FRONTEND DEVELOPER','C/C++ PROGRAMMER','C# PROGRAMMER','UNITY GAME DEVELOPER'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="relative w-full h-screen font-['Poppins'] md:overflow-auto lg:overflow-hidden">
            <div className="fixed md:h-[100%] top-5 h-full w-full md:w-2/5 lg:w-2/5 xl:w-2/5 bg-[#E8DCCC] z-[-1]"></div>

            <main className="w-full md:h-[90%] md:mt-30 mt-32">
                <div className="md:h-4/5 w-[90%] md:w-4/5 lg:w-[70%] xl:w-3/5 mx-auto md:flex space-y-6">
                    <div className="md:h-full h-[400px] w-full md:w-3/5 bg-[#F8ECE4] flex flex-col justify-between shadow-md font-['Lucida_Sans']">
                        <div className="h-full flex flex-col items-center justify-evenly">
                            <img src={MyImg} alt="" className="h-32 w-32 md:h-40 lg:h-48 md:w-40 lg:w-48 rounded-full bg-gray-300" />
                            <h1 className="text-2xl font-bold">Kush Mody</h1>
                            <div className="w-8 border border-blue-600"></div>
                            <p className="text-base md:text-lg tracking-wider font-light text-gray-600">
                                <span ref={typedRef}></span>
                            </p>
                        </div>

                        <div className="bg-white w-full h-[10%] sm:h-[15%] flex items-center justify-evenly">
                            <a href="https://github.com/KushMody" target="_blank" rel="noreferrer">
                                <img src={GitHub} alt="GitHub" className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/917990857744" target="_blank" rel="noreferrer">
                                <img src={WhatsApp} alt="WhatsApp" className="h-5 w-5" />
                            </a>
                            <a href="mailto:kushmody0710@gmail.com" target="_blank" rel="noreferrer">
                                <img src={Email} alt="Email" className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/kush-mody-553976318/?trk=opento_sprofile_details" target="_blank" rel="noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white md:bg-white bg-[#E8DCCC] h-full w-full md:w-[90%] p-4 md:p-6 lg:p-8 flex flex-col md:justify-evenly gap-4 md:gap-0">
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">Hello</h3>
                            <span className="text-base md:text-lg lg:text-xl font-semibold tracking-wide">Here's who I am & what I do</span>
                        </div>

                        <div className="w-full hidden md:flex gap-4">
                            <NavLink to="/resume">
                                <button className="cursor-pointer py-2 px-7 border border-black rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                    RESUME
                                </button>
                            </NavLink>
                            <NavLink to="/projects">
                                <button className="cursor-pointer py-2 px-7 border border-black rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                    PROJECTS
                                </button>
                            </NavLink>
                        </div>

                        <div className="text-sm md:text-base">
                            I am Kush Mody, a passionate Computer Science student with a good grasp of algorithms, data
                            structures, and web development. I have hands-on experience with Django, ReactJS, AngularJS,
                            Node.js, and MongoDB, and I have built projects like a website for my Sister's office related to CA
                            and CMA, an online shoe shopping website, and a CAPTCHA-based authentication system. Currently, I am
                            preparing for GATE CSE 2026, aiming for a top score while balancing my interests in technology and
                            fitness.
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
