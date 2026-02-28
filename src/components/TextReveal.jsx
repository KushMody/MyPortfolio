import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "" }) => {
    // Split text into words or usage wrapper
    // For simplicity in this specific "classic" implementation, 
    // we'll assume the children is a string or simple element to be revealed.

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
