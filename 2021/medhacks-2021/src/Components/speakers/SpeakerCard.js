import React, { useEffect, useState } from "react";

const SpeakerCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    console.log("speaker_" + props.index + 1);
  });

  return (
    <div
      style={{
        margin: "5vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className={"speaker_" + (props.index + 1)}
        style={{
          width: "15vw",
          height: "15vw",
          minWidth: "15vw",
          minHeight: "15vw",
          backgroundImage: `url(` + props.speaker.image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "1rem",
          color: "white",
          boxShadow: "5px 5px 20px black",
          // margin: "auto",
        }}
      ></div>
      <div
        className="speaker_block"
        style={{
          backgroundColor: "rgb(255, 255, 255, 60%)",
          color: "black",
          marginLeft: "5rem",
          borderRadius: "3rem",
          padding: "2rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          // height: "15vw",
          // overflow: "clip",
          boxShadow: "5px 5px 20px black",
        }}
      >
        {props.speaker.bio}
      </div>
    </div>
  );
};

export default SpeakerCard;
