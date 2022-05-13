import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../../App.css";

const Piece1 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/1.png";
const Piece4 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/4.png";
const Piece7 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/7.png";
const Piece9 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/9.png";
const Piece1White =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/1_white.png";
const Piece4White =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/4_white.png";
const Piece7White =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/7_white.png";
const Piece9White =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/ScrollBar/9_white.png";

var pieces = [Piece9, Piece1, Piece7, Piece4];
var pieces_white = [Piece9White, Piece1White, Piece7White, Piece4White];

window.onscroll = function () {
  scrollProgressIndicator();
};

function scrollProgressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = 0;
  var winScrollSection = 0;
  if (document.getElementById("landing") === null) {
    return;
  }
  const speakersPageElement = document.getElementById("speakerPage");
  const speakers = document.getElementById("speakers");
  const tracks = document.getElementById("tracks");
  const about = document.getElementById("about");
  if (speakers && speakersPageElement && tracks && about) {
    if (winScroll >= speakers.offsetTop - 5) {
      height = speakersPageElement.offsetHeight;
      winScrollSection = winScroll - speakers.offsetTop;
      changeTimelineBar("bar4", winScrollSection, height);
    } else if (winScroll >= tracks.offsetTop - 5) {
      height = speakers.offsetTop - tracks.offsetTop;
      winScrollSection = winScroll - tracks.offsetTop;
      changeTimelineBar("bar3", winScrollSection, height);
    } else if (winScroll >= about.offsetTop - 5) {
      height = tracks.offsetTop - about.offsetTop;
      winScrollSection = winScroll - about.offsetTop;
      changeTimelineBar("bar2", winScrollSection, height);
    } else {
      height = about.offsetTop;
      winScrollSection = winScroll;
      changeTimelineBar("bar1", winScrollSection, height);
    }
  }
}

function changeTimelineBar(
  barId: string,
  winScrollSection: number,
  height: number
) {
  var scrollProgress = winScrollSection / height;
  var length = 100 * scrollProgress <= 100 ? 100 * scrollProgress : 100;
  const barIdElement = document.getElementById(barId);
  if (barIdElement) {
    barIdElement.style.height = length + "px";
  }

  for (let i = 1; i <= 4; i++) {
    const ithBar = document.getElementById(`bar${i}`);
    const scrollImageEl: any = document.getElementById(`scrollImage${i}`);
    if (i < parseInt(barId[barId.length - 1]) && ithBar) {
      ithBar.style.height = "100px";
    } else if (i > parseInt(barId[barId.length - 1]) && ithBar) {
      if (i < 4) {
        ithBar.style.height = "0px";
      }
    } else if (scrollImageEl) {
      scrollImageEl.src = pieces[i - 1];
    }
    if (i === parseInt(barId[barId.length - 1]) && scrollImageEl) {
      scrollImageEl.src = pieces[i - 1];
      scrollImageEl.style =
        "width: 30px; height: 30px; margin-left: -15px; filter: drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5)); transorm: scale(1.1)";
      scrollImageEl.className = "scroll-animation grow";
    } else if (scrollImageEl) {
      scrollImageEl.src = pieces_white[i - 1];
      scrollImageEl.style =
        "width: 30px; height: 30px; margin-left: -15px;filter: drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5));";
      scrollImageEl.className = "";
    }
  }
}

const pieceStyle = {
  width: "30px",
  height: "100%",
  marginLeft: "-15px",
  filter: "drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5))",
};

const Scrollbar = () => {
  return (
    <>
      {[1, 2, 3].map((element, i) => {
        return (
          <div
            className={`timeline top-[${
              100 + element * 100
            }px] height-0 bg-[#a992ee]`}
            id={`bar${element}`}
            style={{
              content: "",
              position: "fixed",
              width: "6px",
              backgroundColor: "rgb(255, 255, 255, 0.3)",
              top: "200px",
              right: "30px",
              height: "100px",
              boxShadow: "0px 0px 5px rgb(255, 255, 255, 0.5)",
              zIndex: "0",
            }}
          ></div>
        );
      })}
      <div
        className="timeline h-[300px] z-0"
        style={{
          content: "",
          position: "fixed",
          width: "6px",
          backgroundColor: "rgb(255, 255, 255, 0.3)",
          top: "200px",
          right: "30px",
          height: "100px",
          boxShadow: "0px 0px 5px rgb(255, 255, 255, 0.5)",
          zIndex: "0",
        }}
      >
        {["#top", "#about", "#tracks", "#speakers"].map((element, i) => (
          <Link
            className={"container top-" + -15 + i * 100 + "px"}
            id={`cont${i + 1}`}
            to={element}
            style={{
              content: "",
              cursor: "pointer",
              position: "absolute",
              width: "30px",
              height: "30px",
              left: "-12px",
              backgroundColor: "transparent",
              top: "0",
              zIndex: "99",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <img
              id={`scrollImage${i + 1}`}
              style={pieceStyle}
              src={pieces_white[i]}
              alt="p"
            ></img>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Scrollbar;
