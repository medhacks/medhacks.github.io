import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import speakers from "./speakerData/speakers";
import SpeakerArea from "./SpeakerArea";
import Carousel from "./Carousel";

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SpeakerPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const getSpeakers = () => {
  //   return speakers.map((speaker) => (
  //     <Carousel.Item>
  //       <SpeakerArea speaker={speaker} />
  //     </Carousel.Item>
  //   ));
  // };

  return (
    <>
      <div style={{ fontSize: "2.5rem", textAlign: "center" }}>
        Meet Our Keynote Speakers!
      </div>
      <div style={{ height: "60rem" }}>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          {getSpeakers()}
        </Carousel> */}
        <Carousel items={speakers} active={0} />
      </div>
    </>
  );
};

export default SpeakerPage;
