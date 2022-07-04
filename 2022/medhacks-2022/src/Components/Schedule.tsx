import { FC, useState, MouseEvent } from "react";
import { ReactComponent as ScheduleHeaderSVG } from '../assets/schedule_header.svg';
import ScheduleTable from "./ScheduleTab";

const ScheduleTab: FC<{
    day: string,
}> = ({ day }) => {
    return (
        <div className="flex justify-center p-6 h-201 max-w-xs">
            <div className="rounded-lg bg-[#D31D25] flex justify-center p-2 box-border">
                <div className="border-4 hover:border-[#FCE689] rounded-lg border-white">
                    <h5 className="text-[#FCE689] hover:text-white uppercase italic text-xl text-center leading-tight font-medium font-bold font-sans p-2">{day}</h5>
                </div>
            </div>
        </div>
    );
}

const Schedule: FC = () => {
    const [dayActive, setDayActive] = useState(5);

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>, day: number) => {
        e.preventDefault();
        setDayActive(day);
    };

    return (
        <div className="w-full bg-[#8FC150] flex flex-col">
            { /* Schedule Header */}
            <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
                <ScheduleHeaderSVG className="scale-[50%]" />
            </div>

            { /* Schedule Tabs */}
            <div className="flex flex-row justify-center">
                <button onClick={(e) => { handleMouseEvent(e, 5); }}>
                    <ScheduleTab day="friday" />
                </button>
                <button onClick={(e) => { handleMouseEvent(e, 6); }}>
                    <ScheduleTab day="saturday" />
                </button>
                <button onClick={(e) => { handleMouseEvent(e, 7); }}>
                    <ScheduleTab day="sunday" />
                </button>
            </div>

            { /* Tab Content */}
            <div className="h-200 w-full">
                <ScheduleTable
                    dayActive={dayActive}
                />

                <div className="flex justify-center flex-column">
                    <h5 className="font-sans">*Times are in EDT(UTC-4) and are subject to change</h5>
                </div>
            </div>
        </div>
    )
}

export default Schedule;