import React, { useEffect, useState } from "react";

const SpeakerCard = (props: { index: number; speaker: any }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        margin: "5vw",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: window.innerWidth < 800 ? "column" : "row",
        width: "75%",
      }}
      id={"speaker_" + (props.index + 1)}
    >
      <div
        className={
          "speaker_" +
          (props.index + 1) +
          " ml-[" +
          (window.innerWidth < 800 ? "auto" : null) +
          "] mr-[" +
          (window.innerWidth < 800 ? "auto" : null) +
          "]"
        }
        style={{
          width: window.innerWidth < 800 ? "50vw" : "20vw",
          height: window.innerWidth < 800 ? "50vw" : "20vw",
          backgroundImage: `url(` + props.speaker.image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "1rem",
          color: "white",
          boxShadow: "5px 5px 20px black",
        }}
      ></div>
      <div
        className={
          "speaker_block mt-[" +
          (window.innerWidth < 800 ? "2rem" : null) +
          "] mr-[" +
          (window.innerWidth < 800 ? "auto" : null) +
          "]"
        }
        style={{
          backgroundColor: "rgb(255, 255, 255, 40%)",
          color: "black",
          marginLeft: window.innerWidth < 800 ? "auto" : "2rem",
          borderRadius: "3rem",
          paddingLeft: "2rem",
          paddingTop: "1.25rem",
          paddingRight: "1rem",
          fontSize: "medium",
          fontWeight: "bold",
          width: window.innerWidth < 800 ? "80vw" : "65vw",
          height: window.innerWidth < 800 ? "107.5vw" : "20vw",
          overflow: "scroll",
          boxShadow: "5px 5px 20px rgb(0, 0, 0, .6)",
        }}
      >
        {props.speaker.bio}
      </div>
    </div>
  );
};

export default SpeakerCard;
