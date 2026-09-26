import React from 'react';
import Logo from "@/public/logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="pt-6 sm:pt-8">
            <footer className="footer flex flex-col bg-[#090A0D] text-neutral-content items-center justify-between gap-4 p-5 sm:flex-row sm:p-6 md:px-10 md:py-8">
                <aside className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-2 sm:text-left">
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
                <nav className="w-full text-center text-xs text-gray-400 sm:w-auto sm:text-right sm:text-sm">
                    <p>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </nav>
            </footer>
        </div>
    );
};
export default Footer;