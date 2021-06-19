import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";
import AboutPage from "./About/AboutPage";
import Landing from "./Landing/Landing";
import Scrollbar from './Scrollbar/Scrollbar';

import "../App.css";

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };
  return (
    <div>

      <div
        onMouseDown={() => {
          //console.log("clear");
          setPopup(0);
        }}
      >
        <Landing />
        <div style={{ height: '50px' }} id='about'></div>
        <AboutPage />
        <div style={{ height: '50px' }} id='tracks'></div>
        <Tracks trackClick={trackClick} popup={popup} />
        <div style={{ height: '50px' }} id='speakers'></div>
        <SpeakerPage />
        <div style={{ height: '0px' }} id='sponsors'></div>
      </div>

      <Scrollbar></Scrollbar>
    </div>
  );
}

export default Main;
