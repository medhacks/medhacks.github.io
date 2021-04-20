import React from "react";
import "../../App.css";
import TrackBox from "./TrackBox";

const Tracks = (props) => {
  return (
    <div style={parentStyle}>
      {tracks.map((track) => (
        <TrackBox
          titleNum={track.titleNum}
          title={track.title}
          trackClick={props.trackClick}
          popup={props.popup}
        />
      ))}
    </div>
  );
};

let tracks = [
  { titleNum: "Track 1", title: "Aging in place with resilience and resouces" },
  {
    titleNum: "Track 2",
    title: "Personalized medicine using data driven healthcare",
  },
  {
    titleNum: "Track 3",
    title: "Patient adherence and quality care during a global pandemic",
  },
  {
    titleNum: "Track 4",
    title: "Patient adherence and quality care during a global pandemic",
  },
];

const parentStyle = {
  margin: "auto",
  width: "60%",
  height: "100%",
  display: "flex",
};

export default Tracks;
