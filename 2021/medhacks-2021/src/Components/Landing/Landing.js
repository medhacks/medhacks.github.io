import React from "react";
import logo from "../../Images/mh logo filled.png";
import pieces from "../../Images/adjustedfade.png";
import logoText from "../../Images/mh-text.png";
import Timer from "./Timer";

const Landing = () => {
  const logoContainerStyle = {
    zIndex: 2,
    height: "30vh",
    width: "60vw",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "35%",
    transform: "translate(-50%, -50%)",
    display: "flex",
  };

  const logoStyle = {
    maxHeight: "20vw",
    filter: "drop-shadow(7px 7px 7px rgb(0, 0, 0, 0.75))",
    maxWidth: "20vw",
  };

  const logoTextStyle = {
    filter: "drop-shadow(7px 7px 7px rgb(0, 0, 0, 0.75))",
    transform: "translate(-15%, 0)",
    maxHeight: "6vw",
    maxWidth: "45vw",
    flexShrink: 1,
  };

  const piecesStyle = {
    zIndex: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "80%",
    transform: "translate(-50%, -50%)",
    flexShrink: 1,
  };

  const textStyle = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    width: '100%',
    display: 'inline-block',
    //paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '15%',
    height: '2vw',
  }

  const countdownStyle = {
    zIndex: 2,
    width: '50%',
    margin: "auto",
    position: "absolute",
    left: "50%",
    top: "75%",
    transform: "translate(-50%, -50%)",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '5em',
  }

  return (
    <div style={{ height: "100vh", "overflow-x": "hidden" }}>
      <img style={piecesStyle} src={pieces} alt="Landing Page Background"></img>
      <div style={logoContainerStyle}>
        <img style={logoStyle} src={logo} alt="MedHacks Logo" />
        <div>
          <img
            style={logoTextStyle}
            src={logoText}
            alt="MedHacks Text Logo"
          />
          <div style = {textStyle}>
            <h2 style = {{'float': 'left'}}>designing solutions</h2>
          </div>
          <div style = {textStyle} >
            <h2 style = {{'float': 'right'}}>piece by piece</h2>
          </div>
          <div style = {textStyle} >
            <h2 style = {{'text-align': 'center'}}>9.10.21 - 9.12.21</h2>
          </div>
        </div>
      </div>
      <div style={countdownStyle}>
        <Timer />
      </div>
    </div>
  );
};

export default Landing;
