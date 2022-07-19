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
    <div className="font-sans text-white text-2l h-100" >
      <table className="flex justify-center flex-column">
        <tbody key={dayActive+'schedule'}>{tableContent(dayActive)}</tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;