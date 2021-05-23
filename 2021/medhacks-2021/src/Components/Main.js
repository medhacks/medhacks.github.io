import React, { useState } from "react";
import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors";
import AboutPage from "./About/AboutPage";

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };
  return (
    <div
      style={{ "background-color": "#71a4f1", padding: "0 40px 0 40px" }}
      onMouseDown={() => {
        console.log("clear");
        setPopup(0);
      }}>
      <AboutPage />
      <SpeakerPage />
      <Tracks trackClick={trackClick} popup={popup} />
      <FAQ />
      <Sponsors />
    </div>
  );
}

export default Main;
