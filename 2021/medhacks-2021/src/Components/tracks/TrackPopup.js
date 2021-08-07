import React from "react";

import '../../App.css';

const TrackPopup = (props) => {
  const popupStyle = {
    top: "50%",
    left: "50%",
    zIndex: 50,
    transform: "translate(-50%, -50%)",
    position: "fixed",
    color: 'black',
    textAlign: "center",
    padding: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    //border: '1px solid black',
    borderRadius: "50px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 25%)",
    fontWeight: 700,
    //backgroundColor: "rgb(192,212,244)",
    backgroundColor: 'white',
  }

  const logoStyle = {
    marginBottom: '5%',
  }

  const invisible = {
    height: "100vh",
    left: "0",
    position: "fixed",
    top: "0",
    width: "100vw",
    zIndex: 10,
  }

  const onClick = () => {
    console.log("closed");
    props.trackClick(0);
  }

  return (
    <div>
      <div onClick={() => onClick()} style={invisible}>

      </div>
      <div className="schedule-div" style={popupStyle}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TrackPopup;