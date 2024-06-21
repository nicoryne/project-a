"use client";
import React from "react";
import Router from "next/router";
import LandingHeader from "../components/landing/LandingHeader";
import CategoryAside from "../components/landing/CategoryAside";

export default function App() {
    return (
        <div>
            <LandingHeader />

            <main className="isolate md:py-8 px-4">
                <div className="flex justify-center items-start space-x-8">

                    {/* Category left aside*/}
                    <CategoryAside />

                    {/* Embedded video */}
                    <div className="flex-grow flex flex-col items-center">
                        <div className="rounded-lg overflow-hidden mb-4">
                            <div className="fb-video" data-href="https://www.facebook.com/CesafiEsportsLeague/videos/472024258708581/" data-width="660" data-show-text="false"></div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-lg font-bold">SCHEDULING</span>
                            {/* Scheduling content here */}
                            
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
