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
        {/* <h3>Track {props.titleNum}</h3> */}
        <p style={{ margin: 0 }}>{props.title}</p>
      </div>
    </>
  );
};

const trackStyle = {
  //flex: 1,
  width: "100%",
  display: "inline-block",
  //textAlign: "Center",
  margin: "3%",
  backgroundColor: "white",
  color: "black",
  height: "100%",
  borderRadius: "50px",
  height: "auto",
  justifyContent: "center",
  //borderStyle: 'hidden',
  padding: "20px",
  alignSelf: "stretch",
};

export default TrackBox;
