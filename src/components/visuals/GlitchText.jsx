import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, as: Component = 'span', className = '' }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Base Text */}
            <Component className="relative z-10">{text}</Component>

            {/* Red/Cyan Layers for chromatic aberration */}
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-70 select-none"
                animate={{
                    x: [-2, 2, -1, 0],
                    y: [1, -1, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    repeatType: "mirror",
                    ease: "linear"
                }}
                aria-hidden="true"
            >
                {text}
            </motion.span>

            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-70 select-none"
                animate={{
                    x: [2, -2, 1, 0],
                    y: [-1, 1, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.4,
                    repeatType: "mirror",
                    ease: "linear"
                }}
                aria-hidden="true"
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
