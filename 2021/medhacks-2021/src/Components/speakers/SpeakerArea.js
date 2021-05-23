import React from "react";

const SpeakerArea = (props) => {
  return (
    <div style={{ height: "50rem", overflowY: "scroll" }}>
      <div
        style={{
          width: "100%",
          alignItems: "center", // does vertically center the desired content
          justifyContent: "center", // horizontally centers single line items
          textAlign: "center", // optional, but helps horizontally center text that breaks into multiple lines
          padding: "5rem",
          fontSize: "large",
          fontWeight: 400,
        }}>
        <img
          src={props.speaker.image}
          style={{
            verticalAlign: "middle",
            height: "30rem",
          }}
          alt='speakerImage'></img>
      </div>
      <div
        style={{
          width: "100%",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: "4rem",
        }}>
        {props.speaker.bio}
      </div>
    </div>
  );
};

export default SpeakerArea;
