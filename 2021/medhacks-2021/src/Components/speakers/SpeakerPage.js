import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import speakers from "./speakerData/speakers";
import SpeakerArea from "./SpeakerArea";
import Carousel from "./Carousel";
import { useLocation } from "react-router-dom";
import SpeakerList from "./SpeakerList";

const SpeakerPage = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();

  return (
    <div id='speakerPage'>
      <div
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        <h1 className="section-title">speakers</h1>
      </div>
      {location.pathname === "/speakers" ? (
        <SpeakerList />
      ) : (
        <div style={{ marginTop: "2.5rem", height: window.innerHeight * 0.45 }}>
          <Carousel items={speakers} active={0} setIndex={setIndex} />
        </div>
      )}
    </div>
  );
};

export default SpeakerPage;
