import { FC } from "react";

type TableProps = {
    dayActive: number,
  }

const ScheduleTable: FC<TableProps> = ({ dayActive}) => {
    switch(dayActive) {
        case 5:
          return (
            <div className="font-sans text-white text-2l h-100" >
              <table className="flex justify-center flex-column">
                <tr>
                  <td>Sponsor & Mentor Check-In</td>
                  <td>2:00 PM - 10:00 PM</td>
                </tr>
              </table>
            </div>
          );
        case 6:
          return (
            <div className="font-sans text-white text-2l p-100">
              <table className="flex justify-center flex-column">
                <tr>
                  <td>Workshops</td>
                  <td>10:00 AM - 6:00 PM</td>
                </tr>
              </table>
            </div>
          );
        case 7:
          return (
            <div className="font-sans text-white text-2l">
              <table className="flex justify-center flex-column">
                <tr>
                  <td>DevPost Help</td>
                  <td>6:00 AM - 9:00 AM</td>
                </tr>
              </table>
            </div>
          );
        default:
          return null;
      }
}

export default ScheduleTable;