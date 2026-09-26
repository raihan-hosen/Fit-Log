"use client";

import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
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

const SaveButton = ({ workout }: { workout: Workout }) => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        return null;
    }

    const alreadySaved = workoutContext.Save.some(
        (item) => item.id === workout.id
    );

    const handleSave = () => {
        if (alreadySaved) {
            return;
        }

        workoutContext.setSave([
            ...workoutContext.Save,
            workout,
        ]);

        toast.success(
            `Successfully added "${workout.name}"`
        );
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleSave}
                disabled={alreadySaved}
                className={`flex items-center justify-center gap-2 rounded-lg border px-6 py-4 text-sm font-medium transition ${alreadySaved
                    ? "cursor-not-allowed border-[#343A46] bg-[#20232A] text-gray-500"
                    : "border-[#343A46] text-gray-300 hover:border-[#C2F800] hover:text-white"
                    }`}
            >
                <Bookmark size={18} />

                {alreadySaved
                    ? "Already Saved"
                    : "Save for later"}
            </button>
        </div>
    );
};

export default SaveButton;