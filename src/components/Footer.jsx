import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0d0d0d] border-t border-white/5 py-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#c7ff00]/5 to-transparent pointer-events-none opacity-20" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-black font-[Outfit] text-white tracking-tighter mb-2">
                        KUSH MODY<span className="text-[#c7ff00]">.</span>
                    </h3>
                    <p className="text-gray-500 text-sm font-[Manrope]">
                        &copy; {new Date().getFullYear()} Kush Mody. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/KushMody"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-[#c7ff00] transition-colors duration-300 transform hover:scale-110"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kush-mody-553976318/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-[#c7ff00] transition-colors duration-300 transform hover:scale-110"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:kushmody0710@gmail.com"
                        className="text-gray-400 hover:text-[#c7ff00] transition-colors duration-300 transform hover:scale-110"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
