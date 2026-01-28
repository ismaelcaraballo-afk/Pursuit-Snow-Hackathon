import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-16 text-neutral-600 text-sm relative z-10">
            <p>&copy; {new Date().getFullYear()} Snow Hype Team. <span className="text-neutral-800">Don't sue us if you have school.</span></p>
        </footer>
    );
}
