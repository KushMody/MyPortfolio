import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Kush Mody";

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(fullText);
            setTimeout(() => {
                onComplete();
            }, 1000); // Wait bit after text complete
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center font-[Outfit]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <div className="text-4xl md:text-6xl font-black text-white tracking-tighter overflow-hidden">
                    <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="inline-block whitespace-nowrap overflow-hidden border-r-4 border-[#c7ff00] pr-2"
                    >
                        {fullText}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
