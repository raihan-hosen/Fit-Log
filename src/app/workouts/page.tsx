import React from "react";
import WorkoutCard, { type Workout } from "../components/shared/workoutcard";
import Link from "next/link";

const getWorkout = async (): Promise<Workout[]> => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );
    const data = await res.json();
    return data;
};

const WorkoutPage = async () => {
    const workoutData = await getWorkout();
    return (
        <section id="library">

            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">

                <h2 className="font-bold text-xl sm:text-2xl font-[oswald]">
                    THE LIBRARY
                </h2>

                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                    Twelve lifts covering every major muscle group.
                </p>

            </div>

            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-5 px-4 pt-6 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-6 lg:px-12 xl:grid-cols-3">

                {workoutData.map((workout) => (

                    <Link
                        key={workout.id}
                        href={`/workouts/${workout.id}`}
                    >

                        <WorkoutCard
                            workout={workout}
                        />

                    </Link>

                ))}

            </div>

        </section>
    );
};

export default WorkoutPage;
