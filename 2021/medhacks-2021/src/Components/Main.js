import React, { useState } from "react";
import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors/Sponsors";
import AboutPage from "./About/AboutPage";
import Landing from "./Landing/Landing";

import "../App.css";

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };

  return (
    <div
      style={{
        "background-color": "#a992ee",
        background:
          "linear-gradient(135deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)",
        "overflow-x": "hidden",
      }}
      onMouseDown={() => {
        console.log("clear");
        setPopup(0);
      }}>
      <Landing />
      <AboutPage />
      <SpeakerPage />
      <Tracks trackClick={trackClick} popup={popup} />
      <FAQ />
      <Sponsors />
    </div>
  );
}

export default Main;
