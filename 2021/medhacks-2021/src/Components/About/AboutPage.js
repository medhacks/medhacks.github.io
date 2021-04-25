import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'


const SpeakerPage = () => {
    return (
        <>
            <Card style={rootStyle}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "2.5rem", textAlign: "center" }}>
                        About Us
                    </Card.Title>
                    <Tabs defaultActiveKey="about" transition={false} id="noanim-tab-example">
                        <Tab eventKey="about" title="About">
                            <p style={contentStyle}>At MedHacks 2020, we are bringing together the largest healthcare & technology companies in collaboration with the Johns Hopkins Medicine Network to revolutionize the way we think about medicine. Join us this September underwater with our new mascot, Odette the otter, and our longtime friend, Melvin the moose.</p>
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <p style={contentStyle}>MedHacks was started in 2015 by undergraduate students at Johns Hopkins University with the mission to bring together talented and diverse minds from all backgrounds and to foster collaboration towards solving the world’s most pressing medical issues. To this day, MedHacks is completely run by undergraduate students at Johns Hopkins University who have dedicated countless hours to making this hackathon as exciting and rewarding as possible for all participants, mentors, and sponsors. MedHacks has been attended by thousands from over 500 institutions and 30 countries, has formed partnerships with companies at the forefront of medicine and technology including Blue Cross Blue Shield, CVS Health, Google, and KPCB, and has established itself as one of the world’s most recognized and influential medical hackathons
We believe that the most pressing medical challenges must be solved by interdisciplinary and diverse teams of people. We don’t care about whether or not you’ve won coding competitions, or even if you’re pursuing an engineering or CS degree. You don’t need a PhD or MD to innovate in healthcare, all you need is a passion for bettering humanity. Throughout the years, MedHacks has hosted hackers with diverse majors ranging from public health to anthropology to computer science. We have had participants of all ages, including undergraduates, graduate students, MD students, nursing students, and medical professionals, come together with their diverse expertise and backgrounds to solve problems. We can’t wait to see you and your ideas at MedHacks 2020!</p>

                        </Tab>
                        <Tab eventKey="medhack-factor" title="The MedHack Factor" >
                            <p style={contentStyle}>We believe that the most pressing medical challenges must be solved by interdisciplinary and diverse teams of people. We don’t care about whether or not you’ve won coding competitions, or even if you’re pursuing an engineering or CS degree. You don’t need a PhD or MD to innovate in healthcare, all you need is a passion for bettering humanity.

Throughout the years, MedHacks has hosted hackers with diverse majors ranging from public health to anthropology to computer science. We have had participants of all ages, including undergraduates, graduate students, MD students, nursing students, and medical professionals, come together with their diverse expertise and backgrounds to solve problems. We can’t wait to see you and your ideas at MedHacks 2020!</p>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </>
    );
};

const rootStyle = {
    padding: '30px',
    backgroundColor: 'transparent',
    height: '50vh'
};

const contentStyle = {
    marginTop: '20px'
};

export default SpeakerPage;
