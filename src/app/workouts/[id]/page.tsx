import React from "react";
import Image from "next/image";
import ReadButton from "@/src/app/components/workoutDetails/readButton";
import SaveButton from "@/src/app/components/workoutDetails/saveButton";


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
const getWorkout = async (id: string): Promise<Workout | undefined> => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );
    const data: Workout[] = await res.json();
    return data.find((workout) => workout.id.toString() === id);
};

const WorkoutDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const workout = await getWorkout(id);
    if (!workout) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0D0F12]">
                <h1 className="text-2xl font-bold text-white">
                    Workout not found
                </h1>
            </div>
        );
    }
    return (
        <section className="min-h-screen bg-[#0D0F12] px-4 py-8 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
                    <div className="w-full">
                        <div className="overflow-hidden rounded-2xl border border-[#252830] bg-[#15171C]">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={800}
                                height={800}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[Oswald] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[48px]">
                            {workout.name}
                        </h1>
                        <p className="mt-5 max-w-[700px] text-base leading-relaxed text-[#9CA1AD] sm:text-lg">
                            {workout.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {workout.muscleGroups.map((group) => (
                                <span
                                    key={group}
                                    className="rounded-full bg-[#C2F800] px-4 py-1.5 text-sm font-bold text-black"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 overflow-hidden rounded-2xl border border-[#252A33] bg-[#151820]">
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Equipment
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.equipment}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Difficulty
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.difficulty}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Sets
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.sets}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Reps
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.reps}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Duration
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.duration} min
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252A33] px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Calories
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>
                            <div className="flex items-center justify-between px-6 py-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA1AD]">
                                    Rating
                                </span>
                                <span className="text-sm text-gray-200 sm:text-base">
                                    {workout.rating}
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                                Instructions
                            </h2>
                            <ol className="mt-5 space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-sm leading-relaxed text-[#C4C8D0] sm:text-base"
                                    >
                                        <span className="shrink-0 text-[#7F858F]">
                                            {index + 1}.
                                        </span>
                                        <span>
                                            {instruction}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="mt-8 flex flex-row gap-4">
                            <ReadButton workout={workout} />
                            <SaveButton workout={workout} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsPage;
