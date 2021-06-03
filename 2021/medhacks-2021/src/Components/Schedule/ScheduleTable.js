import React from 'react'
import "../../App.css"

const ScheduleTable = (props) => {
  let dayActive = props.dayActive;

  const containerStyle = {
    marginLeft: '10%',
    marginRight: '10%',

    paddingTop: '2%',
    paddingBottom: '2%',
    border: '6px solid transparent',
    borderRadius: "50px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 25%)",
    fontWeight: 700,
  }

  const fridayGradient = {
    background: "linear-gradient(rgb(255, 255, 255, 30%), rgb(255, 255, 255, 30%)) padding-box, linear-gradient(45deg, rgb(255, 255, 255, 60%) 0%, rgb(255, 255, 255, 30%) 100%) border-box",
  }

  const saturdayGradient = {
    background: "linear-gradient(rgb(255, 255, 255, 30%), rgb(255, 255, 255, 30%)) padding-box, linear-gradient(45deg, rgb(255, 255, 255, 60%) 0%, rgb(255, 255, 255, 30%) 100%) border-box",
  }

  const sundayGradient = {
    background: "linear-gradient(rgb(255, 255, 255, 30%), rgb(255, 255, 255, 30%)) padding-box, linear-gradient(45deg, rgb(255, 255, 255, 60%) 0%, rgb(255, 255, 255, 30%) 100%) border-box",
  }

  switch(dayActive) {
    case "friday":
      return (
        <div style={{...containerStyle, ...fridayGradient}}>
          <table className="schedule-table">
            <tr>
              <td>Sponsor & Mentor Check-In</td>
              <td>2:00 PM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Hacker Check-in</td>
              <td>2:00 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Sponsor Fair</td>
              <td>2:30 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>Opening Ceremony</td>
              <td>6:00 PM - 7:30 PM</td>
            </tr>
            <tr>
              <td>Pitch Session</td>
              <td>7:45 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>Team Registration / Hacking Begins</td>
              <td>9:00 PM - 11:00 PM</td>
            </tr>
            <tr>
              <td>Hacker Experience Events</td>
              <td>10:00 PM - 2:00 AM</td>
            </tr>
          </table>
        </div>
      );
    case "saturday":
      return (
        <div style={{...containerStyle, ...saturdayGradient}}>
          <table className="schedule-table">
            <tr>
              <td>Workshops</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Hacker Experience</td>
              <td>ALL DAY</td>
            </tr>
          </table>
        </div>
      );
    case "sunday":
      return (
        <div style={{...containerStyle, ...sundayGradient}}>
          <table className="schedule-table">
            <tr>
              <td>DevPost Help</td>
              <td>6:00 AM - 9:00 AM</td>
            </tr>
            <tr>
              <td>Projects due on DevPost</td>
              <td>8:30 AM</td>
            </tr>
            <tr>
              <td>Judging Round 1</td>
              <td>10:00 AM - 11:45 AM</td>
            </tr>
            <tr>
              <td>Elimination to 3 teams per track & setup for judging round 2</td>
              <td>11:45 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td>Judging Round 2</td>
              <td>12:30 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td>Closing Ceremony</td>
              <td>3:00 PM - 4:00 PM</td>
            </tr>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default ScheduleTable