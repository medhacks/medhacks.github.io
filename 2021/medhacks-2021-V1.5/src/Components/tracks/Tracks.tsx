import React from "react";
import "../../App.css";
import TrackBox from "./TrackBox";
const Piece7 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/7.png";
const Piece8 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/8.png";

const Tracks = (props: { trackClick: Function; popup: number }) => {
  const trackButtonsStyle = {
    margin: "auto",
    width: "85%",
    height: "100%",
    // display: "flex",

    justifyContent: "center",
    alignItems: "center",

    // display: "-ms-flex",
    display: "-webkit-flex",
  };

  return (
    <div
      id="tracks"
      className="section-container"
      style={{ backgroundColor: "rgb(17, 61, 86, .2)" }}
    >
      <div style={{ width: "100%" }}>
        <div className="section-title-container">
          <img src={Piece7}></img>
          <h1 className="section-title">tracks</h1>
          <img src={Piece8}></img>
        </div>
        {/* <p className="section-text">To help with ideation, MedHacks and its sponsors create three tracks every year so hackers can pick a theme to focus their project on. The top three projects in each track will be awarded a prize.</p> */}
      </div>
      <div style={trackButtonsStyle} className="tracks-container">
        {tracks.map((track) => (
          <TrackBox
            video={track.video}
            titleNum={track.titleNum}
            logo={track.logo}
            title={track.title}
            description={track.description}
            trackClick={props.trackClick}
            popup={props.popup}
          />
        ))}
      </div>
    </div>
  );
};

let tracks = [
  {
    titleNum: 1,
    logo: "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/careFirst.png",
    video:
      "https://mmedhacks-2021-website.s3.amazonaws.com/TrackVideos/CareFirst_Track.mp4",
    title:
      "Using Smart Devices and Integrated Medical History to Enhance Access-to-Care",
    description:
      "Your team's mission is to use smart devices and integrated medical history to lower access-to-care barriers including but not limited to rural areas, language challenges, mental/behavioral/cognitive health issues. Your project might build upon the following focus areas: using an apple watch, mobile phone or other IoT devices for signal capture, feedback or intervention; fusing multi-modal device data and medical history; analytics;  data privacy.",
  },
  {
    titleNum: 2,
    logo: "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/CBID.png",
    video:
      "https://mmedhacks-2021-website.s3.amazonaws.com/TrackVideos/CBID_Track.mp4",
    title: "Combating Healthcare Challenges in Older Patients",
    description:
      "As populations around the world get older, there is an increased need to combat healthcare challenges in older patients. Your team’s mission is to come up with solutions that address these challenges while maintaining patient quality of care and quality of life. Your project might build upon the following focus areas: memory, mobility, polypharmacy, telemedicine, etc. Get creative! There is considerable room for entrepreneurship and innovation in this area.",
  },
  {
    titleNum: 3,
    logo: "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/apl.png",
    video:
      "https://mmedhacks-2021-website.s3.amazonaws.com/TrackVideos/APL_Track.mp4",
    title: "Data Science, Technology, and Health Innovation",
    description:
      "Your team’s mission is to help us advance the healthcare industry through an open science “hack.” The possibilities are endless. The first step is to identify emerging issues in healthcare, and then come up with creative and unique solutions to reduce or resolve them. Your project might build upon the following focus areas: scaling technology platforms, making data actionable, and empowering patients.",
  },
];

export default Tracks;
