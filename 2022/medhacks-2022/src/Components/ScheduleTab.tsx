import { FC } from "react";

type TableProps = {
  dayActive: number,
}

const tableContent = (dayActive: number) => {
  switch (dayActive) {
    case 5:
      return (
        <tr>
          <td>Sponsor & Mentor Check-In</td>
          <td>2:00 PM - 10:00 PM</td>
        </tr>
      );
    case 6:
      return (
        <tr>
          <td>Workshops</td>
          <td>10:00 AM - 6:00 PM</td>
        </tr>
      );
    case 7:
      return (
        <tr>
          <td>DevPost Help</td>
          <td>6:00 AM - 9:00 AM</td>
        </tr>
      );
    default:
      return null;
  }
}

const ScheduleTable: FC<TableProps> = ({ dayActive }) => {
  return (
    <div className="font-sans text-white text-xl h-100 bg-[#377BC2CC] mr-20 ml-20 pt-10 pb-10 rounded-3xl" >
      <table className="flex justify-center flex-column">
        <tbody key={dayActive + 'schedule'}>{tableContent(dayActive)}</tbody>
      </table>
      <div className="font-bold text-black">
        <br/> *Times are in EDT(UTC-4) and are subject to change
      </div>
    </div>
  );
}

export default ScheduleTable;