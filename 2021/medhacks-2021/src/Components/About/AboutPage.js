import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'


const SpeakerPage = () => {
    const speakerStyle = {
        textAlign: "Center",
        margin: "100px auto",
        //width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.1)',
        color: "white",
        borderRadius: "14px",
        justifyContent: "center",
        padding: "20px",
        alignSelf: "stretch",
        border: '0px',
        boxShadow: '7px 7px 7px rgb(0 0 0 / 20%)',
        backgroundColor: 'rgb(96, 89, 142, 30%)'
    };

    return (
        <>
            <Card style={speakerStyle} className="section-container">
                <Card.Body>
                    <Card.Title style={{ fontSize: "2.5rem", fontWeight: '900' }}>
                        <i>about</i>
                    </Card.Title>
                    <br />
                    <h3>
                        MedHacks is the nation's <bold style={{fontWeight: '800'}}><i>premier medical hackathon</i></bold>.
                    </h3>
                    <p>
                        It was started in 2015 by undergraduate students at Johns Hopkins University with the mission to bring together talented and diverse minds from all backgrounds and to foster collaboration towards solving the world's most pressing medicacl issues. As a result, MedHacks has hosted hackers with diverse majors ranging from public health to anthropology to ocmputer science. Over the years, MedHacks has been attended by thousands from over 500 institutions and 30 countries, has formed partnerships with companies at the forefront of medicine and technology inccluding Blue Cross Blue Shield, CVS Health, Google, and Mathworks, and has established itselff as one of the world's most recognized and influential medical hackathons.
                    </p>
                    <br />
                    <h5><i>
                        We can't wait to see you and your ideas at
                        <br />
                        <span style={{ fontWeight: '800' }}>MedHacks 2021!</span>
                    </i></h5>
                </Card.Body>
            </Card>
        </>
    );
};

export default SpeakerPage;
