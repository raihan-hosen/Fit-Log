import React from "react";
import WorkoutCard, { type Workout } from "../components/shared/workoutcard";

const getWorkout = async (): Promise<Workout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();

    return data;
};

const WorkoutPage = async () => {
    const workoutData = await getWorkout();

    return (
        <section>
            <div className="px-12">
                <h2 className="font-bold text-2xl font-[oswald]">THE LIBRARY</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 px-12 pt-8 sm:grid-cols-2 xl:grid-cols-3">
                {workoutData.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </section>
    );
};

export default WorkoutPage;