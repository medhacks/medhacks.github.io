import React from "react";

const TrackPopup = (props) => {
  const popupStyle = {
    top: "10%",
    left: "50%",
    zIndex: 5,
    marginLeft: "-30%",
    //height: "80%",
    width: "60%",
    border: "2px solid black",
    position: "fixed",
    //backgroundColor: "#abffd1",
    backgroundColor: 'white',
    color: 'black',
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