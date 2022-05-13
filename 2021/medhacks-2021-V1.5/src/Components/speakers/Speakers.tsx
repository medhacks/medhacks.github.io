import React from "react";
import SpeakerArea from "./SpeakerArea";
import { HashLink as Link } from "react-router-hash-link";

const Speakers = (props: { items: Array<any> }) => {
  const container = {
    display: "flex",
    justifyContent: "space-around",
  };

  const style = {
    height: "50vh",
    width: window.innerWidth < 800 ? "100%" : "45%",
  };

  return (
    <div className="tracks-container" style={container}>
      <Link className="speaker_1" style={style} to="/speakers#speaker_1">
        <SpeakerArea speaker={props.items[0]} />
      </Link>
      <Link className="speaker_2" style={style} to="/speakers#speaker_2">
        <SpeakerArea speaker={props.items[1]} />
      </Link>
    </div>
  );
};

export default Speakers;
