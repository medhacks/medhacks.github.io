import React, { useEffect } from "react";
import Temp from "./Components/Temp.js"
import './App.css';
import { Switch, BrowserRouter, Route, useLocation } from "react-router-dom";
import Main from "./Components/Main.js";
import { Helmet } from 'react-helmet'
import FAQ from "./Components/FAQ/FAQ.js";
import SpeakerPage from "./Components/speakers/SpeakerPage.js";
import Schedule from "./Components/Schedule/Schedule"
import NavBar from "./Components/NavBar/NavBar"
import Sponsors from "./Components/Sponsors/Sponsors"
import Footer from "./Components/Footer/Footer"

const TITLE = 'Medhacks'

function App() {
  
  const appStyle = {
    backgroundColor: "#a992ee",
    background:
      "linear-gradient(135deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)",
    overflowX: "hidden",
    color: "white",
  }

  return (
    <div style={appStyle}>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Temp} />
        <Route exact path="/2021" component={Main} />
        <Route exact path="/speakers" component={SpeakerPage} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
