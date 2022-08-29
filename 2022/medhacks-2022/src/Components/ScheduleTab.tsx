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
            <td>6:00-7:30 PM</td>
          </tr>
          <tr>
            <td>Hacker Check-In</td>
            <td>6:00-9:00 PM</td>
          </tr>
          <tr>
            <td>Opening Ceremony</td>
            <td>6:00-7:30 PM</td>
          </tr>
          <tr>
            <td>Pitch Sessions</td>
            <td>7:45-9:00 PM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Team Registration/Hacking Begins</td>
            <td>9:00-11:00 PM</td>
          </tr>
          <tr>
            <td>Movie Night</td>
            <td>10:00 PM</td>
          </tr>
          <tr>
            <td>Movie Night</td>
            <td>12:00 PM</td>
          </tr>
          <tr>
            <td>Movie Night</td>
            <td>2:00 PM</td>
          </tr>
        </div>
      );
    case 6:
      return (
        <div>
          <tr>
            <td>Workshops</td>
            <td>11:00 AM</td>
          </tr>
          <tr>
            <td>Hacker Experience</td>
            <td>1:00-2:00 PM</td>
          </tr>
          <tr>
            <td>Workshops</td>
            <td>12:30 PM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">MATLAB for Machine Learning (ML) <br></br>and Deep Learning (DL) workflows</td>
            <td>2:00-3:00 PM</td>
          </tr>
          <tr>
            <td>Painting with Bob Ross and MLH</td>
            <td>3:00-4:00 PM</td>
          </tr>
          <tr>
            <td>Hacker Experience</td>
            <td>7:00-8:00 PM</td>
          </tr>
          <tr>
            <td>Movie Night</td>
            <td>10:00 PM</td>
          </tr>
          <tr>
            <td>Movie Night</td>
            <td>12:00 PM</td>
          </tr>
        </div>
      );
    case 7:
      return (
        <div>
          <tr>
            <td>DevPost Help</td>
            <td>6:00-9:00 AM</td>
          </tr>
          <tr>
            <td>DevPost Due</td>
            <td>8:30 AM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Judging Round 1</td>
            <td>10:00-11:45 AM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Elimination to 3 teams/track <br></br>+ setup for judging round 2</td>
            <td>11:45 AM-12:00 PM</td>
          </tr>
          <tr>
            <td className="pr-[10px]">Judging Round 2</td>
            <td>12:30-3:00 PM</td>
          </tr>
          <tr>
            <td>Judge Deliberation</td>
            <td></td>
          </tr>
          <tr>
            <td >Closing Ceremony</td>
            <td>3:00-4:00 PM</td>
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