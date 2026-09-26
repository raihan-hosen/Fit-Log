"use client";

import React, { useContext } from "react";
import { CalendarCheckIcon } from "lucide-react";
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

const ReadButton = ({ workout }: { workout: Workout }) => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        return null;
    }

    const alreadyAdded = workoutContext.todaysPlan.some(
        (item) => item.id === workout.id
    );

    const AddtoSave = () => {
        if (alreadyAdded) {
            return;
        }

        workoutContext.settodaysPlan([
            ...workoutContext.todaysPlan,
            workout,
        ]);

        toast.success(
            `Successfully added "${workout.name}"`
        );
    };

    return (
        <button
            type="button"
            onClick={AddtoSave}
            disabled={alreadyAdded}
            className={`flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-bold transition ${alreadyAdded
                ? "cursor-not-allowed bg-gray-600 text-gray-300"
                : "bg-[#C2F800] text-black hover:bg-[#D0FF33]"
                }`}
        >
            <CalendarCheckIcon size={18} />

            {alreadyAdded
                ? "Already Added"
                : "Add to today's plan"}
        </button>
    );
};

export default ReadButton;