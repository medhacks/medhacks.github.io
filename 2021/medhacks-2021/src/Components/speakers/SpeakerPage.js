import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import speakers from "./speakerData/speakers";
import SpeakerArea from "./SpeakerArea";
import Carousel from "./Carousel";

const SpeakerPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}
      >
        <h1 className="section-title">speakers</h1>
      </div>
      <div style={{ marginTop: "2.5rem", height: window.innerHeight * 0.45 }}>
        <Carousel items={speakers} active={0} setIndex={setIndex} />
      </div>
    </>
  );
};

export default SpeakerPage;
