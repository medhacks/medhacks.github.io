import React from "react";

const TrackPopup = (props) => {
  const popupStyle = {
    top: "10%",
    left: "50%",

    marginLeft: "-30%",
    height: "80%",
    width: "60%",
    border: "2px solid black",
    position: "absolute",
    backgroundColor: "#abffd1",

    textAlign: "center",
    padding: "10%",
  };

  return (
    <div style={popupStyle}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default TrackPopup;