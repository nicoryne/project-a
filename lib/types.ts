// Types for Supabase

export type LeagueSchedule = {
    id: string /* primary key */;
    category: string,
    start_date: Date,
    end_date: Date,
    schedule_section: string,
    season_number: number,
}