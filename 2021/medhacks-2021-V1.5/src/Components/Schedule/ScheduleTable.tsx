import React from "react";
import "../../App.css";

const ScheduleTable = (props: {
  dayActive: String;
  fridayGradient: React.CSSProperties;
  saturdayGradient: React.CSSProperties;
  sundayGradient: React.CSSProperties;
}) => {
  let dayActive = props.dayActive;

  const containerStyle: React.CSSProperties = {
    margin: "auto",
    paddingTop: "2%",
    paddingBottom: "2%",
    border: "6px solid transparent",
    borderRadius: "50px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 25%)",
    fontWeight: 700,
  };

  switch (dayActive) {
    case "friday":
      return (
        <div
          className="schedule-div"
          style={{ ...containerStyle, ...props.fridayGradient }}
        >
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
              <td>Sponsor Meet & Greet</td>
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
          <div style={{ textAlign: "center", color: "black" }}>
            <h6>Times are in EDT(UTC-4) and are subject to change</h6>
          </div>
        </div>
      );
    case "saturday":
      return (
        <div
          className="schedule-div"
          style={{ ...containerStyle, ...props.saturdayGradient }}
        >
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
          <div style={{ textAlign: "center", color: "black" }}>
            <h6>Times are in EDT(UTC-4) and are subject to change</h6>
          </div>
        </div>
      );
    case "sunday":
      return (
        <div
          className="schedule-div"
          style={{ ...containerStyle, ...props.sundayGradient }}
        >
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
              <td>Judging Round 2</td>
              <td>12:30 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td>Closing Ceremony</td>
              <td>3:00 PM - 4:00 PM</td>
            </tr>
          </table>
          <div style={{ textAlign: "center", color: "black" }}>
            <h6>Times are in EDT(UTC-4) and are subject to change</h6>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default ScheduleTable;
