import React, { useEffect } from "react";
import TrackPopup from "./TrackPopup";

const TrackBox = (props: {
  trackClick: Function;
  title: String;
  logo: any;
  description: String;
  popup: number;
  titleNum: number;
  video: any;
}) => {
  useEffect(() => {
    //console.log(props);
  }, [props]);
  return (
    <>
      {props.popup === props.titleNum ? (
        <TrackPopup
          trackClick={props.trackClick}
          description={props.description}
          title={props.title}
          video={props.video}
        />
      ) : null}
      <div
        className="track"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "3%",
          //backgroundColor: "rgb(192,212,244)",
          backgroundColor: "white",
          color: "black",
          //border: '1px black solid',
          borderRadius: "50px",
          height: "auto",
          justifyContent: "space-between",
          padding: "20px",
          alignSelf: "stretch",
        }}
        onClick={() => props.trackClick(props.titleNum)}
      >
        <p style={{ margin: 0, fontWeight: 700, fontStyle: "italic" }}>
          {props.title}
        </p>
        <div style={{ height: "10vh" }}>
          <img
            style={{
              width: "80%",
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            src={props.logo}
            alt={props.title + " logo"}
          ></img>
        </div>
      </div>
    </>
  );
};

export default TrackBox;
