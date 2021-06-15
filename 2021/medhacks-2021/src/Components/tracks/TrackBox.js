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
        <p style={{ margin: 0 }}>{props.title}</p>
      </div>
    </>
  );
};

const trackStyle = {
  width: "100%",
  display: "inline-block",
  margin: "3%",
  backgroundColor: "white",
  color: "black",
  height: "100%",
  borderRadius: "50px",
  height: "auto",
  justifyContent: "center",
  padding: "20px",
  alignSelf: "stretch",
};

export default TrackBox;
