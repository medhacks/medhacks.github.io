import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from 'react-router-dom'

import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors/Sponsors";
import AboutPage from "./About/AboutPage";
import Landing from "./Landing/Landing";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import "../App.css";

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };

  return (
    <div
      onMouseDown={() => {
        console.log("clear");
        setPopup(0);
      }}>
      <Landing />
      <AboutPage />
      <Tracks trackClick={trackClick} popup={popup} />
      <SpeakerPage />
    </div>
  );
}

export default Main;
