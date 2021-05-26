import React from "react";
import speakers from "./speakerData/speakers";
import SpeakerCard from "./SpeakerCard";

const SpeakerList = () => {
  return (
    <div>
      {speakers.map((speaker, index) => (
        <SpeakerCard speaker={speaker} index={index} />
      ))}
    </div>
  );
};

export default SpeakerList;
