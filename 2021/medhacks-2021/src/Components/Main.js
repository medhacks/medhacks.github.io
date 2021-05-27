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
    boxShadow: '5px 5px 7px rgb(0 0 0 / 20%)'
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
    boxShadow: '5px 5px 7px rgb(0 0 0 / 20%)',
    color: 'white',
  }

  return (
    <div>

      <div
        onMouseDown={() => {
          console.log("clear");
          setPopup(0);
        }}
      >
        <Landing />
        <div style={{height: '10px'}} id='about'></div>
        <AboutPage />
        <div style={{height: '10px'}} id='tracks'></div>
        <Tracks trackClick={trackClick} popup={popup} />
        <div style={{height: '10px'}} id='speakers'></div>
        <SpeakerPage />

        <div class="timeline" style={timelineStyle}></div>
        <div class="timeline" id="myBar" style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0' })}>

          <a class="container" href='#top' style={containerStyle}></a>
          <a class="container" href='#about' style={Object.assign({}, containerStyle, { top: '100px' })} />
          <a class="container" href='#tracks' style={Object.assign({}, containerStyle, { top: '200px' })} />
          <a class="container" href='#speakers' style={Object.assign({}, containerStyle, { top: '300px' })} />
        </div>
      </div>

    </div>
  );
}

export default Main;
