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
      <div style={{ fontSize: "2.5rem", textAlign: "center" }}>
        <h1 className="section-title">speakers</h1>
      </div>
      <div style={{ height: "60rem" }}>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          {getSpeakers()}
        </Carousel> */}
        <Carousel items={speakers} active={0} setIndex={setIndex} />

        {/* <div
          style={{
            width: "100%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "4rem",
          }}
        >
          {speakers[index].bio}
        </div> */}
      </div>
    </>
  );
};

export default SpeakerPage;
