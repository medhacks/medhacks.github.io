import React, { useState } from "react";
import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };
  return (
    <div
      style={{ "background-color": "#71a4f1" }}
      onMouseDown={() => {
        console.log("clear");
        setPopup(0);
      }}
    >
      <SpeakerPage />
      <Tracks trackClick={trackClick} popup={popup} />
    </div>
  );
}

export default Main;
