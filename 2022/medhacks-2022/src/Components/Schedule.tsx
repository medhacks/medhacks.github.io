import { useState, type MouseEvent } from 'react';
import { ReactComponent as ScheduleHeaderSVG } from '../assets/schedule_header.svg';
import ScheduleTable from './ScheduleTab';

const ScheduleTab = ({ day }: { day: string }) => {
  return (
    <h5 className="text-[#FCE689] hover:text-white focus:text-white uppercase italic md:text-2xl sm:text-md text-center leading-tight font-bold font-sans p-2">
      {day}
    </h5>
  );
};

const Schedule = () => {
  const [dayActive, setDayActive] = useState(5);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>, day: number) => {
    e.preventDefault();
    setDayActive(day);
  };

  return (
    <div>
      {/* Schedule Header */}
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50 z-20">
        <ScheduleHeaderSVG className="scale-[50%]" />
      </div>
    <div className="font-sans text-white md:text-2xl sm:text-lg pl-[2%] pr-[2%] bg-[#0000000F] mr-[5%] ml-[5%] mt-10 pt-10 pb-10 rounded-3xl">
        Below is a tentative schedule for MedHacks 2022. We will be releasing a
        full schedule closer to the hackathon, so check back soon!
      </div>

      {/* Schedule Tabs */}
      {/* <div className="grid grid-cols-3 gap-2 pl-[5%] pr-[5%] pb-[1%]">
        <div className="bg-[#E63F21] p-2 rounded-xl">
          <button
            onClick={(e) => {
              handleMouseEvent(e, 5);
            }}
            className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
          >
            <ScheduleTab day="friday" />
          </button>
        </div>
        <div className="bg-[#E63F21] p-2 rounded-xl">
          <button
            onClick={(e) => {
              handleMouseEvent(e, 6);
            }}
            className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
          >
            <ScheduleTab day="saturday" />
          </button>
        </div>
        <div className="bg-[#E63F21] p-2 rounded-xl">
          <button
            onClick={(e) => {
              handleMouseEvent(e, 7);
            }}
            className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
          >
            <ScheduleTab day="sunday" />
          </button>
        </div> 
      </div>*/}

      {/* Tab Content */}
      {/* <div className="w-full h-200">
        <ScheduleTable dayActive={dayActive} />
      </div> */}
    </div>
  );
};

export default Schedule;
