import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HypeGauge = ({ score }) => {
    // normalize score to 0-100
    const clampedScore = Math.min(Math.max(score, 0), 100);

    // Circumference logic for SVG circle
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (clampedScore / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-64 h-64">
            {/* Background Circle */}
            <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="#333"
                    strokeWidth="12"
                />
                {/* Animated Progress Circle */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 2, ease: "circOut" }}
                />
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
                        <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Center Text */}
            <div className="z-10 flex flex-col items-center">
                <motion.span
                    className="text-6xl font-black text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {clampedScore}%
                </motion.span>
                <span className="text-cyan-400 text-sm tracking-widest font-mono mt-1">PROBABILITY</span>
            </div>

            {/* Particle/Glow Effect (Simple) */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
        </div>
    );
};

export default HypeGauge;
