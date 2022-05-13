import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import speakers from "./speakerData/speakers";
import Speakers from "./Speakers";
import { useNavigate, useLocation } from "react-router-dom";
import SpeakerList from "./SpeakerList";

const Piece5 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/5.png";
const Piece6 =
  "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/6.png";

const SpeakerPage = () => {
  const [index, setIndex] = useState(0);
  const [useCarousel, setUseCarousel] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      setUseCarousel(true);
    } else {
      setUseCarousel(false);
    }
  });

  return (
    <div id="speakerPage">
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
          id="speakers"
          className={
            "section-container pb-[" + (!useCarousel ? "1rem" : null) + "]"
          }
          style={{
            backgroundColor: "rgb(11, 104, 64, .2)",
            //height: !useCarousel ? "auto" : "38vw",
          }}
        >
          <div
            className="section-title-container"
            style={{ marginBottom: "0rem", display: "flex" }}
          >
            <img src={Piece5} alt="p5"></img>
            <h1 className="section-title">speakers</h1>
            <img src={Piece6} alt="p5"></img>
          </div>
          {/* <Carousel items={speakers} active={0} setIndex={setIndex} /> */}
          {useCarousel ? (
            <Speakers items={speakers} />
          ) : (
            <>
              {speakers.map((speaker, index) => (
                <div
                  id={
                    "speaker_" +
                    (index + 1) +
                    " ml-[" +
                    (window.innerWidth < 800 ? "auto" : null) +
                    "] mr-[" +
                    (window.innerWidth < 800 ? "auto" : null) +
                    "]"
                  }
                  style={{
                    width: window.innerWidth < 800 ? "50vw" : "20vw",
                    height: window.innerWidth < 800 ? "50vw" : "20vw",
                    backgroundImage: `url(` + speaker.image + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: "1rem",
                    color: "white",
                    boxShadow: "5px 5px 20px black",
                    marginTop: index !== 0 ? "2rem" : "0.5rem",
                    marginBottom: "2rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={() => {
                    navigate("/speakers");
                    window.scroll(0, index * 775);
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      padding: "0rem",
                      margin: "0rem",
                      flexGrow: "1",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ flexGrow: "2" }}></div>
                    <div
                      style={{ bottom: "0rem", textShadow: "2px 2px #000000" }}
                    >
                      {speaker.name}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      textAlign: "left",
                      fontStyle: "italic",
                      padding: "0rem",
                      margin: "0rem",
                      wordWrap: "normal",
                      marginBottom: "0.5rem",
                      textShadow: "2px 2px #000000",
                    }}
                  >
                    {speaker.affiliation}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SpeakerPage;
