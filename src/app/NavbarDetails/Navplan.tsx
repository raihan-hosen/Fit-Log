"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { WorkoutContext } from "@/src/app/context/WorkoutContext";

const Navplan = () => {
    const workoutContext = useContext(WorkoutContext);

    const planCount = workoutContext?.todaysPlan.length ?? 0;

    return (
        <Link
            href="/myplan"
            className="flex shrink-0 items-center gap-1 text-sm hover:opacity-80 sm:gap-2"
        >
            <span className="hidden text-gray-300 sm:inline">
                Plan
            </span>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                {planCount}
            </span>
        </Link>
    );
};

export default Navplan;