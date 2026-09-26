"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    Check,
    ChevronDown,
    Clock,
    Flame,
    Plus,
    Star,
    X,
} from "lucide-react";
import { WorkoutContext } from "@/src/app/context/WorkoutContext";
import { toast } from "react-toastify";

interface Workout {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
}

type Tab = "today" | "saved";

type SortKey = "duration" | "caloriesBurned" | "rating";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
    { key: "duration", label: "Duration" },
    { key: "caloriesBurned", label: "Calories" },
    { key: "rating", label: "Rating" },
];

const MyPlanPage = () => {
    const workoutContext = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState<Tab>("today");
    const [sortKey, setSortKey] = useState<SortKey>("duration");
    const [sortOpen, setSortOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 400);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target as Node)
            ) {
                setSortOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!workoutContext) {
        return null;
    }

    const { todaysPlan, settodaysPlan, Save, setSave } = workoutContext;

    const workouts = activeTab === "today" ? todaysPlan : Save;

    const sortedWorkouts = [...workouts].sort(
        (a, b) => b[sortKey] - a[sortKey]
    );

    const totalMinutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const deleteWorkout = (id: number) => {
        const workout =
            activeTab === "today"
                ? todaysPlan.find((item) => item.id === id)
                : Save.find((item) => item.id === id);

        if (activeTab === "today") {
            settodaysPlan(todaysPlan.filter((item) => item.id !== id));

            toast.success(
                `${workout?.name ?? "Workout"} removed from today's plan`
            );
        } else {
            setSave(Save.filter((item) => item.id !== id));

            toast.success(
                `${workout?.name ?? "Workout"} removed from saved`
            );
        }
    };

    const markAsDone = (id: number) => {
        const workout = todaysPlan.find((item) => item.id === id);

        settodaysPlan(todaysPlan.filter((item) => item.id !== id));

        toast.success(`${workout?.name ?? "Workout"} marked as done`);
    };

    return (
        <main className="min-h-screen bg-[#0D0E12] px-4 py-8 text-white md:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <h1 className="font-[oswald] text-3xl font-bold sm:text-4xl">
                        MY PLAN
                    </h1>

                    <p className="mt-2 text-sm text-neutral-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load
                        more.
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="rounded-xl bg-[#17181E] p-5">
                        <p className="text-xs text-gray-400">Exercises</p>

                        <p className="mt-2 text-2xl font-bold text-[#C2F800]">
                            {workouts.length}
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#17181E] p-5">
                        <p className="text-xs text-gray-400">Minutes</p>

                        <p className="mt-2 text-2xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#17181E] p-5">
                        <p className="text-xs text-gray-400">Calories</p>

                        <p className="mt-2 text-2xl font-bold">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2 rounded-xl bg-[#17181E] p-1">
                        <button
                            type="button"
                            onClick={() => setActiveTab("today")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${activeTab === "today"
                                ? "bg-[#C2F800] text-black"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${activeTab === "saved"
                                ? "bg-[#C2F800] text-black"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div ref={sortRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setSortOpen((open) => !open)}
                            className="flex items-center gap-2 rounded-lg border border-[#343A46] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-[#C2F800] hover:text-white"
                        >
                            Sort By:{" "}
                            {
                                SORT_OPTIONS.find(
                                    (option) => option.key === sortKey
                                )?.label
                            }

                            <ChevronDown size={14} />
                        </button>

                        {sortOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-lg border border-[#343A46] bg-[#17181E] shadow-lg">
                                {SORT_OPTIONS.map((option) => (
                                    <button
                                        key={option.key}
                                        type="button"
                                        onClick={() => {
                                            setSortKey(option.key);
                                            setSortOpen(false);
                                        }}
                                        className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-[#232430] ${option.key === sortKey
                                            ? "text-[#C2F800]"
                                            : "text-gray-300"
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-[#17181E]">
                        <p className="text-sm text-gray-400">
                            Loading workouts…
                        </p>
                    </div>
                ) : sortedWorkouts.length > 0 ? (
                    <div className="space-y-4">
                        {sortedWorkouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex flex-col gap-4 rounded-xl bg-[#17181E] p-4 sm:flex-row sm:items-center"
                            >
                                <div className="flex flex-1 items-center gap-4">
                                    <img
                                        src={workout.image}
                                        alt={workout.name}
                                        className="h-16 w-16 shrink-0 rounded-lg object-cover"
                                    />

                                    <div className="min-w-0">
                                        <h2 className="truncate text-sm font-bold uppercase tracking-wide">
                                            {workout.name}
                                        </h2>

                                        <p className="mt-1 text-xs text-gray-400">
                                            {workout.equipment}
                                        </p>

                                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Clock size={13} />
                                                {workout.duration} min
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Flame size={13} />
                                                {workout.caloriesBurned} kcal
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Star size={13} />
                                                {workout.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className="rounded-lg border border-[#343A46] px-4 py-2 text-xs font-semibold text-gray-300 transition hover:border-[#C2F800] hover:text-white"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "today" && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                markAsDone(workout.id)
                                            }
                                            className="flex items-center gap-1 rounded-lg bg-[#C2F800] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#D0FF33]"
                                        >
                                            <Check size={14} />
                                            Mark as Done
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            deleteWorkout(workout.id)
                                        }
                                        aria-label={`Remove ${workout.name}`}
                                        className="rounded-full p-2 text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl bg-[#17181E] text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C2F800]/10">
                            <Plus
                                size={24}
                                className="text-[#C2F800]"
                            />
                        </div>

                        <h2 className="text-xl font-bold">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 max-w-sm text-sm text-gray-400">
                            Browse the library and add a lift to get today
                            moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-5 rounded-lg bg-[#C2F800] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#D0FF33]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
};

export default MyPlanPage;
