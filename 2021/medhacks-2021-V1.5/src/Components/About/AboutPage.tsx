import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const SpeakerPage = () => {
  const speakerStyle: React.CSSProperties = {
    textAlign: "center",
    borderRadius: "14px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 20%)",
    backgroundColor: "rgb(96, 89, 142, 30%)",
    border: "none",
  };

  return (
    <>
      <Card style={speakerStyle} className="section-container">
        <Card.Body>
          <Card.Title
            className="section-title-container"
            style={{ fontSize: "2.5rem", fontWeight: "900" }}
          >
            <img
              src={
                "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/1.png"
              }
            ></img>
            <i>about</i>
            <img
              src={
                "https://mmedhacks-2021-website.s3.amazonaws.com/PuzzlePieces/2.png"
              }
            ></img>
          </Card.Title>
          <h3>
            MedHacks is the nation's{" "}
            <b style={{ fontWeight: "800" }}>
              <i>premier medical hackathon</i>
            </b>
            .
          </h3>
          <p className="section-text">
            It was started in 2015 by undergraduate students at Johns Hopkins
            University with the mission to bring together talented and diverse
            minds from all backgrounds and to foster collaboration towards
            solving the world's most pressing medical issues. As a result,
            MedHacks has hosted hackers with diverse majors ranging from public
            health to anthropology to computer science. Over the years, MedHacks
            has been attended by thousands from over 500 institutions and 30
            countries, has formed partnerships with companies at the forefront
            of medicine and technology including Blue Cross Blue Shield, CVS
            Health, Google, and MathWorks, and has established itself as one of
            the world's most recognized and influential medical hackathons.
          </p>
          <h5>MedHacks will be held virtually this year.</h5>
          <br />
          <h5>
            <i>
              We can't wait to see you and your ideas at
              <br />
              <span style={{ fontWeight: "800" }}>MedHacks 2021!</span>
            </i>
          </h5>
        </Card.Body>
      </Card>
    </>
  );
};

export default SpeakerPage;
