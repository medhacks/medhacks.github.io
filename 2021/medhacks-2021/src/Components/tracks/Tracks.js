import React from "react";
import "../../App.css";
import TrackBox from "./TrackBox";

class Tracks extends React.Component {
  render() {
    return (
      <div style={parentStyle}>
        {tracks.map((track) => (
          <TrackBox
            titleNum={track.titleNum}
            title={track.title}
            trackClick={this.trackClick}
          />
        ))}
      </div>
    );
  }
}

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
];

const parentStyle = {
  margin: "auto",
  width: "60%",
  height: "100%",
  // overflow: "hidden",
  // display: "-ms-flex",
  // display: "-webkit-flex",
  flexDirection: "row",
  display: "flex",
};

export default Tracks;
