"use client"
import React from 'react';
import { Montserrat } from 'next/font/google';
import { createClient } from '../../lib/supabase/server';

import LocalFont from 'next/font/local';

const akiraExpanded = LocalFont({
    src: '../../../public/fonts/AkiraExpanded.otf',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export default async function ScheduleSection() {
    const supabase = createClient();
    const { data: schedules } = await supabase.from("league_schedule").select();

    return (
        <aside className="w-64 py-3 md:px-4">
            <h1 className={`${akiraExpanded.className} text-base`}>CESAFI ESPORTS LEAGUE SEASON 3</h1>
            <pre>{JSON.stringify(schedules, null, 2)}</pre>
            <div className="py-6 space-y-8">
                <div className="py-3 bg-gradient-to-r from-[#0f0ff556] to-transparent px-4 border-l-4 border-[#0F0FF5]">
                    <span className={`${montserrat.className} font-extrabold opacity-80 text-xl`}>PRESEASON</span>
                    <h2 className={`${montserrat.className} font-bold text-[#0F0FF5] text-2xl`}>GROUP STAGE</h2>
                    <span className={`${montserrat.className} font-regular opacity-80 text-base`}>Jun 1 - Jun 30</span>
                </div>

                <div className="py-3 px-4 border-l-4">
                    <span className={`${montserrat.className} font-extrabold opacity-80 text-xl`}>PRESEASON</span>
                    <h2 className={`${montserrat.className} font-bold  text-2xl`}>PLAYOFFS</h2>
                    <span className={`${montserrat.className} font-regular opacity-80 text-base`}>Jul 6 - Jul 21</span>
                </div>

                <div className="py-3 px-4 border-l-4">
                    <span className={`${montserrat.className} font-extrabold opacity-80 text-xl`}>PRESEASON</span>
                    <h2 className={`${montserrat.className} font-bold text-2xl`}>FINALS</h2>
                    <span className={`${montserrat.className} font-regular opacity-80 text-base`}>Aug 3 - Aug 4</span>
                </div>
            </div>
        </aside>
    );
}