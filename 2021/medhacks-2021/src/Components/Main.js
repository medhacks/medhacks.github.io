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
      style={{
        backgroundColor: "#a992ee",
        background:
          "linear-gradient(135deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)",
        overflowX: "hidden",
        color: "white",
      }}
      onMouseDown={() => {
        console.log("clear");
        setPopup(0);
      }}>
      <NavBar />
      <Landing />
      <AboutPage />
      <SpeakerPage />
      <Tracks trackClick={trackClick} popup={popup} />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Main;
