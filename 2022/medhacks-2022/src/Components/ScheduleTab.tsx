import { FC } from "react";

type TableProps = {
  dayActive: number,
}

const tableContent = (dayActive: number) => {
  switch (dayActive) {
    case 5:
      return (
        <div>
          <tr>
            <td>Sponsor & Mentor Check-In</td>
            <td>6:00-6:30 PM</td>
          </tr>
          <tr>
            <td>Individual Hacker Check-In</td>
            <td>6:00-6:30 PM</td>
          </tr>
          <tr>
            <td>Sponsor Meet and Greet</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>Opening Ceremony</td>
            <td>6:00-7:30 PM</td>
          </tr>
          <tr>
            <td>Idea Pitching/ Team Forming Sessions</td>
            <td>7:45-9:30 PM</td>
          </tr>
          <tr>
            <td>Hacking Begins</td>
            <td>9:30 PM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Post Pitch Session Collaboration / Team Forming</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>Team Registration</td>
            <td>10:00 PM</td>
          </tr>
          <tr>
            <td>Friday night hacker experience</td>
            <td>TBD</td>
          </tr>
        </div>
      );
    case 6:
      return (
        <div>
          <tr>
            <td>Workshops</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Hacker experience activities</td>
            <td>TBD</td>
          </tr>
        </div>
      );
    case 7:
      return (
        <div>
          <tr>
            <td>Devpost submissions</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td className="pr-[10px]">First round judging</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Second round judging</td>
            <td>TBD</td>
          </tr>
        </div>
      );
    default:
      return null;
  }
}

const ScheduleTable: FC<TableProps> = ({ dayActive }) => {
  return (
    <div className="font-sans text-black md:text-xl sm:text-lg h-100 bg-[#FFFFFF8F] mr-[5%] ml-[5%] p-[5%] rounded-xl" >
      <table className="flex justify-center flex-column text-left font-bold">
        <tbody key={dayActive + 'schedule'}>{tableContent(dayActive)}</tbody>
      </table>
      <div className="text-black">
        <br /> *Times are in EDT(UTC-4) and are subject to change
      </div>
    </div>
  );
}

export default ScheduleTable;