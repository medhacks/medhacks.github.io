import { FC, useState, MouseEvent } from 'react';
import { ReactComponent as ScheduleHeaderSVG } from '../assets/schedule_header.svg';
import ScheduleTable from './ScheduleTab';

const ScheduleTab: FC<{
  day: string;
}> = ({ day }) => {
  return (
    <h5 className="text-[#FCE689] hover:text-white focus:text-white uppercase italic text-xl text-center leading-tight font-medium font-bold font-sans p-2">
      {day}
    </h5>
  );
};

const Schedule: FC = () => {
  const [dayActive, setDayActive] = useState(5);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>, day: number) => {
    e.preventDefault();
    setDayActive(day);
  };

  return (
    <div>
      {/* Schedule Header */}
      <div className="w-full flex flex-row justify-center items-center h-64 hover:scale-[102%] transition ease-in-out delay-50">
        <ScheduleHeaderSVG className="scale-[50%]" />
      </div>
      <div className="font-sans text-white text-2xl pl-20 pr-20 bg-[#377BC2CC] mr-20 ml-20 pt-10 pb-10 mb-20 rounded-3xl">
        Below is a tentative schedule for MedHacks 2022. We will be releasing a
        full schedule closer to the hackathon, so check back soon!
      </div>

      <div>
        {/* Schedule Tabs */}
        <div className="flex justify-center flex-row m-auto w-[80%] flex-shrink" >
          <div className="md:w-[170px] xl:w-[300px] mr-2 ml-2 bg-[#E63F21] p-2 rounded-xl">
            <button
              onClick={(e) => {
                handleMouseEvent(e, 5);
              }}

              className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
            >
              <ScheduleTab day="friday" />
            </button>
          </div>
          <div className="md:w-[170px] xl:w-[300px] mr-2 ml-2 bg-[#E63F21] p-2 rounded-xl">
            <button
              onClick={(e) => {
                handleMouseEvent(e, 6);
              }}

              className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
            >
              <ScheduleTab day="saturday" />
            </button>
          </div>
          <div className="md:w-[170px] xl:w-[300px] mr-2 ml-2 bg-[#E63F21] p-2 rounded-xl">
            <button
              onClick={(e) => {
                handleMouseEvent(e, 7);
              }}

              className="w-full border-4 hover:border-[#FCE689] focus:border-[#FCE689] rounded-xl border-white "
            >
              <ScheduleTab day="sunday" />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="h-200 w-full">
          <ScheduleTable dayActive={dayActive} />
        </div>
      </div >
    </div >
  );
};

export default Schedule;
