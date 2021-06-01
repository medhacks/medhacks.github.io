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

  const textShadowStyle = {
    filter: "drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.75))"
  };

  const logoStyle = {
    maxHeight: "20vw",
    maxWidth: "20vw",
  };

  const logoTextStyle = {
    transform: "translate(-15%, 10px)",
    maxHeight: "6vw",
    maxWidth: "45vw",
    flexShrink: 1,
  };

  const piecesStyle = {
    zIndex: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "90%",
    transform: "translate(-50%, -75%)",
    flexShrink: 1,
  };

  const textStyle = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    width: '100%',
    display: 'inline-block',
    paddingLeft: '20px',
    paddingRight: '15%',
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
        <img style={Object.assign({}, logoStyle, textShadowStyle)} src={logo} alt="MedHacks Logo" />
        <div>
          <img
            style={Object.assign({}, logoTextStyle, textShadowStyle)}
            src={logoText}
            alt="MedHacks Text Logo"
          />
          <div style = {Object.assign({}, textStyle, textShadowStyle, {marginTop: '30px', lineHeight: '1.2px'})}>
            <h2 style = {{'float': 'left', fontWeight: '900', marginBottom: '0'}}>designing solutions</h2>
            <h2 style = {{'float': 'right', fontWeight: '900'}}>piece by piece</h2>
          </div>
          <div style = {textStyle} >
            <h2 style = {{'text-align': 'center', fontWeight: '900'}}>9.10.21 - 9.12.21</h2>
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
