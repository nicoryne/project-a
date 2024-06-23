"use client"
import { LeagueSchedule } from "@/lib/types"

export default function ScheduleSection({ schedules } : { schedules: LeagueSchedule[] }) {
    const currentDate = new Date();

    return (
        <div className="w-64 py-3 px-4">
            {schedules.map((schedule) => {
                const isActive = currentDate >= new Date(schedule.start_date) && currentDate <= new Date(schedule.end_date);
                
                return (
                    <div 
                        key={schedule.id} 
                        className={`py-3 px-4 border-l-4 my-4 ${isActive ? 'bg-gradient-to-r from-[#0f0ff556] to-transparent border-[#0F0FF5]' : ''}`}
                    >
                        <span className={`font-extrabold opacity-80 text-xl`}>
                            {schedule.category}
                        </span>
                        <h2 className={`font-bold text-2xl ${isActive ? 'text-[#0F0FF5]' : ''}`}>
                            {schedule.schedule_section}
                        </h2>
                        <span className="font-regular opacity-80 text-base">
                            {new Date(schedule.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(schedule.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
