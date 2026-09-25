import React from 'react';
import Logo from "@/public/logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="pt-6 sm:pt-8">
            <footer className="footer bg-[#090A0D] sm:footer-horizontal text-neutral-content items-center p-5 sm:p-6 md:px-10 md:py-8">
                <aside className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 text-center sm:text-left">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="shrink-0"
                    />
                    <span className="font-bold tracking-wider text-white text-base sm:text-lg">
                        FITLOG
                    </span>
                </aside>
                <nav className="w-full sm:w-auto grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xs sm:text-sm text-gray-400 text-center sm:text-right">
                    <p>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;