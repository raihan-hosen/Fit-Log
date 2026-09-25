import React from "react";
import Image from "next/image";
import Banner from "@/public/banner.png";

const Hero = () => {
    return (
        <div className="  px-6 py-12 lg:px-12">
            <div className="max-w-[1400px] mx-auto">

                <div className="min-h-[500px] rounded-2xl border border-[#252830] bg-[#15171C] px-8 md:px-12 lg:px-16 lg:py-14">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-10">


                        <div>
                            <p className="mb-6 text-sm font-bold tracking-widest text-[#C2F800]">
                                WORKOUT LIBRARY
                            </p>

                            <h1 className="max-w-175 text-5xl md:text-6xl lg:text-[56px] font-[Oswald] font-black leading-[0.92] tracking-tight text-white">
                                TRAIN WITH INTENT. LOG
                                <br />
                                EVERY SET.
                            </h1>

                            <p className="mt-7 max-w-[620px] text-base md:text-lg leading-relaxed text-[#9CA1AD]">
                                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                                into today&apos;s plan, and watch the week&apos;s work add up.
                            </p>

                            <button className="mt-8 rounded-md bg-[#C2F800] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#D0FF33]">
                                BROWSE WORKOUTS
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src={Banner}
                                alt="Workout illustration"
                                priority
                                className="w-[280px] md:w-[340px] lg:w-[390px] h-auto object-contain"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;