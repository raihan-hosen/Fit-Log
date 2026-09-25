import React from "react";
import WorkoutCard, { type Workout } from "../components/shared/workoutcard";
const getWorkout = async (): Promise<Workout[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );
    const data = await res.json();
    return data;
};

const WorkoutPage = async () => {
    const workoutData = await getWorkout();
    return (
        <section>
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="font-bold text-xl sm:text-2xl font-[oswald]">
                    THE LIBRARY
                </h2>
                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5 px-4 pt-6 sm:grid-cols-2 sm:px-6 md:px-8 lg:px-12 lg:gap-6 xl:grid-cols-3">
                {workoutData.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkoutPage;