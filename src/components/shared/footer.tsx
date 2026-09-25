import React from 'react';
import Logo from "@/public/logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='pt-8'>
            <footer className="footer bg-[#090A0D] sm:footer-horizontal text-neutral-content items-center p-6 px-10 py-8">
                <aside className="grid-flow-col items-center gap-2">
                    <Image src={Logo} alt="Logo" />
                    <span className="font-bold tracking-wider text-white text-lg">FITLOG</span>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-sm text-gray-400">
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;