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

window.onscroll = function () { scrollProgressIndicator() };

function scrollProgressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = 0;
  var winScrollSection = 0;
  if (document.getElementById('landing') === null) {
    return;
  }
  
  if (winScroll >= document.getElementById("speakers").offsetTop) {
    height = document.getElementById("speakerPage").offsetHeight;
    winScrollSection = winScroll - document.getElementById("speakers").offsetTop;
    changeTimelineBar('bar4', winScrollSection, height);
    console.log('speakers')
  } else if (winScroll >= document.getElementById("tracks").offsetTop) {
    height = document.getElementById("speakers").offsetTop - document.getElementById("tracks").offsetTop;
    winScrollSection = winScroll - document.getElementById("tracks").offsetTop;
    changeTimelineBar('bar3', winScrollSection, height);
  } else if (winScroll >= document.getElementById("about").offsetTop) {
    height = document.getElementById("tracks").offsetTop - document.getElementById("about").offsetTop;
    winScrollSection = winScroll - document.getElementById("about").offsetTop;
    changeTimelineBar('bar2', winScrollSection, height);
  } else {
    height = document.getElementById("about").offsetTop;
    winScrollSection = winScroll;
    changeTimelineBar('bar1', winScrollSection, height);
  }

}

function changeTimelineBar(barId, winScrollSection, height) {
  var scrollProgress = (winScrollSection / height);
  var length = 100 * scrollProgress <= 100 ? 100 * scrollProgress : 100;

  if (document.getElementById(barId) !== null) {
    document.getElementById(barId).style.height = length + "px";
  }

  for (let i = 1; i <= 4; i++) {
    if (i === parseInt(barId[barId.length - 1])) {
      document.getElementById(`cont${i}`).style.color = '#a992ee';
    } else {
      document.getElementById(`cont${i}`).style.color = '#FFF';
    }
    if (i < parseInt(barId[barId.length - 1])) {
      document.getElementById(`bar${i}`).style.height = "100px";
    } else if (i > parseInt(barId[barId.length - 1])) {
      document.getElementById(`bar${i}`).style.height = "0px";
    }
  }
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
    top: '200px',
    left: '30px',
    height: '100px',
    boxShadow: '5px 5px 7px rgb(0 0 0 / 20%)',
    zIndex: '0'
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
    zIndex: '99',
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
        <div style={{ height: '50px' }} id='about'></div>
        <AboutPage />
        <div style={{ height: '50px' }} id='tracks'></div>
        <Tracks trackClick={trackClick} popup={popup} />
        <div style={{ height: '50px' }} id='speakers'></div>
        <SpeakerPage />
        <div style={{ height: '0px' }} id='sponsors'></div>

        <div class="timeline" style={Object.assign({}, timelineStyle, { height: '400px' })}>
          <a class="container" id='cont1' href='#top' style={containerStyle}></a>
          <a class="container" id='cont2' href='#about' style={Object.assign({}, containerStyle, { top: '100px' })} />
          <a class="container" id='cont3' href='#tracks' style={Object.assign({}, containerStyle, { top: '200px' })} />
          <a class="container" id='cont4' href='#speakers' style={Object.assign({}, containerStyle, { top: '300px' })} />
          <a class="container" id='cont5' href='#sponsors' style={Object.assign({}, containerStyle, { top: '400px' })} />
        </div>
        <div class="timeline" id="bar1" style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: '200px' })}>
        </div>
        <div class="timeline" id="bar2" style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: '300px' })}>
        </div>
        <div class="timeline" id="bar3" style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: '400px' })}>
        </div>
        <div class="timeline" id="bar4" style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: '500px' })}>
        </div>
      </div>

    </div>
  );
}

export default Main;
