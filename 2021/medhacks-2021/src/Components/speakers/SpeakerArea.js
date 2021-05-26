import React from "react";

const SpeakerArea = (props) => {
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
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          // position: "absolute",
          // bottom: "4rem",
          // height: "5rem",
          padding: "0rem",
          margin: "0rem",
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flexGrow: "2" }}></div>
        <div style={{ bottom: "0rem" }}>{props.speaker.name}</div>
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          textAlign: "left",
          fontStyle: "italic",
          // position: "absolute",
          // bottom: "1rem",
          padding: "0rem",
          margin: "0rem",
          // top: "0rem",
          // height: "5rem",
          // textOverflow: "clip",
          wordWrap: "normal",
          marginBottom: "0.5rem",
          // width: "25vw",
        }}
      >
        {props.speaker.affiliation}
      </div>
    </div>
  );
};

export default SpeakerArea;
