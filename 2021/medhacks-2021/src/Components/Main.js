import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import SpeakerPage from "./speakers/SpeakerPage";
import Tracks from "./tracks/Tracks";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors/Sponsors";
import AboutPage from "./About/AboutPage";
import Landing from "./Landing/Landing";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import "../App.css";

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  var scrolled = (winScroll / height) * 100;
  var length = 300 * scrolled <= 300 ? 300 * scrolled : 300;
  document.getElementById("myBar").style.height = length + "px";
}

function Main() {
  const [popup, setPopup] = useState(0);

  const trackClick = (i) => {
    console.log("click!" + i);
    setPopup(i);
  };

  const timelineStyle = {
    content: '',
    position: 'fixed',
    width: '6px',
    backgroundColor: 'white',
    top: '30%',
    left: '30px',
    height: '300px',
    boxShadow: '0 0 7px rgb(255, 255, 255 / 80%)'
  }

  const containerStyle = {
    content: '',
    cursor: 'pointer',
    position: 'absolute',
    width: '30px',
    height: '30px',
    left: '-12.5px',
    backgroundColor: 'white',
    top: '0',
    zIndex: '1',
    borderRadius: '5px',
    hover: {
      boxShadow: '7px 7px 7px rgb(0 0 0 / 20%)'
    }
  }

  return (
    <div>

      <div
        onMouseDown={() => {
          console.log("clear");
          setPopup(0);
        }}
      >

      <div class="timeline"  style={timelineStyle}></div>
      <div class="timeline" id="myBar" style={Object.assign({}, timelineStyle, { backgroundColor: 'black', height: '0'})}>

      <div class="container" style={containerStyle} />
        <div class="container" style={Object.assign({}, containerStyle, { top: '100px' })} />
        <div class="container" style={Object.assign({}, containerStyle, { top: '200px' })} />
        <div class="container" style={Object.assign({}, containerStyle, { top: '300px' })} />
      </div>
        <Landing />
        <AboutPage />
        <Tracks trackClick={trackClick} popup={popup} />
        <SpeakerPage />
      </div>

    </div>
  );
}

export default Main;
