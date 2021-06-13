import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import speakers from "./speakerData/speakers";
import SpeakerArea from "./SpeakerArea";
import Carousel from "./Carousel";
import { useHistory, useLocation } from "react-router-dom";
import SpeakerList from "./SpeakerList";
import Piece5 from "../../Images/puzzlePieces/5.png";
import Piece6 from "../../Images/puzzlePieces/6.png";

const SpeakerPage = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const history = useHistory();

  return (
    <div id='speakerPage'>
      {location.pathname === "/speakers" ? (
        <>
          <div
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "2.5rem",
              marginTop: "4rem",
            }}
          >
            <h1 className="section-title">speakers</h1>
          </div>
          <SpeakerList />
        </>
      ) : (
        <div
          id="tracks"
          className="section-container"
          style={{
            backgroundColor: "rgb(17, 61, 86, .2)",
            marginTop: "2.5rem",
            height: "35vw",
            // position: "relative",
          }}
        >
          <div
            className="section-title-container"
            style={{ marginBottom: "0rem" }}
          >
            <img src={Piece5} alt="p5"></img>
            <h1 className="section-title">speakers</h1>
            <img src={Piece6} alt="p5"></img>
          </div>

          {window.innerWidth > 750 ? (
            <Carousel items={speakers} active={0} setIndex={setIndex} />
          ) : (
            <button
              style={{
                borderRadius: "1rem",
                marginTop: "1rem",
              }}
              onClick={() => {
                history.push("/speakers");
              }}
            >
              Click here to view speakers
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SpeakerPage;
