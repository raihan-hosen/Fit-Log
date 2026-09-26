"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { WorkoutContext } from "@/src/app/context/WorkoutContext";

const Navsaved = () => {
    const workoutContext = useContext(WorkoutContext);

    const savedCount = workoutContext?.Save.length ?? 0;

    return (
        <Link
            href="/myplan"
            className="flex shrink-0 items-center gap-1 text-sm hover:opacity-80 sm:gap-2"
        >
            <span className="text-gray-300 sm:inline">
                Saved
            </span>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300">
                {savedCount}
            </span>
        </Link>
    );
};

export default Navsaved;