"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.png";
import Navplan from "../../NavbarDetails/Navplan";
import Navsaved from "../../NavbarDetails/Navsaved";

const Navbar = () => {
    const pathname = usePathname();
    const menuItems = [
        {
            name: "Workouts",
            href: "/",
        },
        {
            name: "My Plan",
            href: "/myplan",
        },
    ];

    return (
        <div className="navbar w-full bg-base-100 px-2 shadow-sm sm:px-4">
            <div className="navbar-start min-w-0">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost px-2 lg:hidden"
                    >
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
                        className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        {menuItems.map((item) => {
                            const isActive =
                                pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={
                                            isActive
                                                ? "font-bold text-[#C2F800]"
                                                : "text-gray-300"
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <Link
                    href="/"
                    className="btn btn-ghost flex items-center gap-1 px-1 sm:gap-2 sm:px-4"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
                    />
                    <span className="text-sm font-bold tracking-wider text-white sm:text-xl">
                        FITLOG
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-2 px-1">
                    {menuItems.map((item) => {
                        const isActive =
                            pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`px-4 py-2 font-medium transition ${isActive
                                        ? "text-[#C2F800]"
                                        : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="navbar-end min-w-0">
                <div className="flex items-center gap-2 sm:gap-4">
                    <Navplan />
                    <Navsaved />
                </div>
            </div>
        </div>
    );
};
export default Navbar;