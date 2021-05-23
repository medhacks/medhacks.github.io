import React, { useEffect } from "react";
import TrackPopup from "./TrackPopup";

const TrackBox = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <>
      {props.popup === props.titleNum ? (
        <TrackPopup description={props.description} title={props.title} />
      ) : null}
      <div
        className='track'
        style={trackStyle}
        onClick={() => props.trackClick(props.titleNum)}>
        <h3>Track {props.titleNum}</h3>
        <p>{props.title}</p>
      </div>
    </>
  );
};

const trackStyle = {
  //flex: 1,
  width: "100%",
  display: "inline-block",
  textAlign: "Center",
  margin: "3%",
  backgroundColor: "#b089f5",
  height: "100%",
  borderStyle: "solid",
  border: "2px solid black",
  borderRadius: "20px",
  height: "auto",
};

export default TrackBox;
