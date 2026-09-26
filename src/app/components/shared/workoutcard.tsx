import React from "react";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";

export interface Workout {
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

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;
    return (
        <div className="card w-full max-w-96 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
            <figure>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={workout.name}
                    className="h-auto w-full object-cover"
                />
            </figure>
            <div className="card-body p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                    {muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="badge border-none bg-lime-300 font-bold uppercase tracking-wide text-neutral-900"
                        >
                            {group}
                        </span>
                    ))}
                </div>
                <h2 className="card-title text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                    {name}
                </h2>
                <p className="text-sm text-neutral-400">{equipment}</p>
                <hr className="border-neutral-800" />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span>{duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Flame className="h-4 w-4 shrink-0" />
                        <span>{caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Star className="h-4 w-4 shrink-0 fill-lime-300 text-lime-300" />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;