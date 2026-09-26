"use client";

import React, { createContext, useState } from "react";

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

interface WorkoutContextType {
    todaysPlan: Workout[];
    settodaysPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    Save: Workout[];
    setSave: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

const Workoutprovider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [todaysPlan, settodaysPlan] = useState<Workout[]>([]);
    const [Save, setSave] = useState<Workout[]>([]);

    const sharedData: WorkoutContextType = {
        todaysPlan,
        settodaysPlan,
        Save,
        setSave,
    };

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default Workoutprovider;