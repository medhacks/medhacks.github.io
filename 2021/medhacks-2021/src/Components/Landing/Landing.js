import React from "react";
import logo from "../../Images/mh logo filled.png";
import pieces from "../../Images/adjustedfade.png";
import logoText from "../../Images/mh-text.png";

const Landing = () => {
  const logoContainerStyle = {
    zIndex: 2,
    height: "30vh",
    width: "60vw",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "50%",
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
    maxHeight: "7vw",
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

  return (
    <div style={{ height: "100vh", "overflow-x": "hidden" }}>
      <img style={piecesStyle} src={pieces} alt="Landing Page Background"></img>
      <div style={logoContainerStyle}>
        <img style={logoStyle} src={logo} alt="Landing Page Background" />
        <img
          style={logoTextStyle}
          src={logoText}
          alt="Landing Page Background"
        />
      </div>
    </div>
  );
};

export default Landing;
