import React from "react";
import Timer from "./Timer";

const logo = "https://mmedhacks-2021-website.s3.amazonaws.com/mh logo filled.png";
const pieces = "https://mmedhacks-2021-website.s3.amazonaws.com/adjustedfade.png";
const logoText = "https://mmedhacks-2021-website.s3.amazonaws.com/mh-text.png";

const Landing = () => {

  const countdownStyle = {
    zIndex: 2,
    margin: "auto",
    position: "absolute",
    left: "50%",
    top: "75%",
    transform: "translate(-50%, -50%)",
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: 'none',
  }

  const piecesStyle = {
    zIndex: 0,
    position: "absolute",
    transform: "translate(0, -20%)",
    maxWidth: "90%",
    marginLeft: '5%',

  };

  return (
    <div id='landing' style={{height: '80vh'}}>
      <div>
        <img style={piecesStyle} src={pieces} alt="Landing Page Background"></img>
        <div className="logo-container">
          <div className="logo-child logo-left">
            <img src={logo} alt="MedHacks Logo" />
          </div>
          <div className="logo-child logo-right">
            <img
              src={logoText}
              alt="MedHacks Text Logo"
            />
            <div className="logo-text">
              <h2 style={{textAlign: 'left'}}>designing solutions</h2>
              <h2 style={{textAlign: 'right'}}>piece by piece</h2>
            </div>
            <div>
              <h2 className="date-text" style={{textAlign: 'center', fontWeight: 900, fontStyle:'italic'}}>9.10.21 - 9.12.21</h2>
            </div>
          </div>
        </div>
      </div>
      <div style={countdownStyle} className="countdown-container">
        <h2 style={{textAlign:"center", marginTop:'-5%', marginBottom:'5%', fontWeight:'700', filter: 'drop-shadow(-2px 2px 0px rgb(0, 0, 0, 0.4))'}}>Applications Coming Soon!</h2>
        <Timer />
      </div>
    </div>
  );
};

export default Landing;
