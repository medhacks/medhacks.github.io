import React from "react";

const SpeakerArea = (props: { speaker: any }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(` + props.speaker.image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        display: "flex",
        flexDirection: "column",
        textShadow: "3px 3px 6px #000000",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "0rem",
          margin: "0rem",
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <div style={{ flexGrow: "2" }}></div>
        <div style={{ bottom: "0rem" }}>{props.speaker.name}</div>
      </div>
      <div
        style={{
          fontSize: "1rem",
          textAlign: "left",
          fontStyle: "italic",
          padding: "0rem",
          margin: "0rem",
          wordWrap: "normal",
          marginBottom: "0.5rem",
        }}
      >
        {props.speaker.affiliation}
      </div>
    </div>
  );
};

export default SpeakerArea;
