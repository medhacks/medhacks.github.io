import React, { useState } from "react";
import TrackPopup from "../TrackPopup";

const TrackBox = (props) => {
  const [popup, setPopup] = useState(false);

  const trackClick = () => {
    setPopup(true);
  };

  return (
    <>
      {popup ? <TrackPopup /> : null}
      <div className="track" style={trackStyle} onClick={trackClick}>
        <h3>{props.titleNum}</h3>
        <p>{props.title}</p>
      </div>
    </>
  );
};

const trackStyle = {
  // minWidth: "33.33%",
  flexGrow: "1",
  // display: "inline-block",
  // "text-align": "center",
  margin: "3%",
  backgroundColor: "#b089f5",
  height: "100%",
  borderStyle: "solid",
  border: "2px solid black",
  borderRadius: "20px",
};

const blockStyle = {};

export default TrackBox;
