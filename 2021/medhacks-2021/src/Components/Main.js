import React, { useState } from "react";
import Tracks from "./tracks/Tracks";

function Main() {
  const [popup, setPopup] = useState(false);

  const trackClick = () => {
    console.log("click!");
    setPopup(true);
  };
  return (
    <div
      style={{ "background-color": "#71a4f1" }}
      onMouseDown={() => {
        setPopup(false);
      }}
    >
      <Tracks trackClick={trackClick} popup={popup} />
    </div>
  );
}

export default Main;
