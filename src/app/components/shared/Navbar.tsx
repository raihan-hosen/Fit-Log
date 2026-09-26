import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/logo.png";

const Navbar = () => {

    const menuItems = [
        { name: 'Workouts', href: '/' },
        { name: 'My Plan', href: '/my-plan' },
    ];

    return (
        <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 w-full">

            <div className="navbar-start min-w-0">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    href="/"
                    className="btn btn-ghost text-xl flex items-center gap-2 px-2 sm:px-4"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="shrink-0"
                    />

                    <span className="font-bold tracking-wider text-white text-base sm:text-xl">
                        FITLOG
                    </span>
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1 items-center gap-2">

                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-gray-300 hover:text-white font-medium px-4 py-2"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>

            </div>

            <div className="navbar-end gap-1 sm:gap-4">

                <Link
                    href="/my-plan"
                    className="flex items-center gap-1 sm:gap-2 text-sm cursor-pointer hover:opacity-80"
                >
                    <span className="text-gray-300 hidden xs:inline sm:inline">
                        Plan
                    </span>

                    <span className="w-7 h-7 rounded-full bg-[#ccff00] text-black font-bold flex items-center justify-center text-xs shrink-0">
                        0
                    </span>
                </Link>

                <Link
                    href="/my-plan"
                    className="flex items-center gap-1 sm:gap-2 text-sm cursor-pointer hover:opacity-80"
                >
                    <span className="text-gray-300 hidden xs:inline sm:inline">
                        Saved
                    </span>

                    <span className="w-7 h-7 rounded-full border border-gray-700 text-gray-300 flex items-center justify-center text-xs shrink-0">
                        0
                    </span>
                </Link>

            </div>

        </div>
    );
};

export default Navbar;