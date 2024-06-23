import LandingHeader from "@/components/landing/LandingHeader";
import ScheduleSection from "@/components/landing/ScheduleSection";
import { createClient } from "@/lib/supabase/server";

import { LeagueSchedule } from "@/lib/types"

export default async function Home() {
    const supabase = createClient();
    const currentYear = new Date().getFullYear();

    const { data } = await supabase
        .from('league_schedule')
        .select('*')
        .gte('start_date', `${currentYear}-01-01`)
        .lte('end_date', `${currentYear}-12-31`);

    const schedules: LeagueSchedule[] = data || [];

    return (
        <div>
           <LandingHeader />
            <main className="isolate">
                {/* Schedule section*/}
                <ScheduleSection schedules={schedules} />
            </main>
        </div>
    );
}