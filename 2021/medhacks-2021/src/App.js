import React, { useEffect } from "react";
import Temp from "./Components/Temp.js"
import './App.css';
import { Switch, BrowserRouter, Route, useLocation } from "react-router-dom";
import Main from "./Components/Main.js";
import { Helmet } from 'react-helmet'
import FAQ from "./Components/FAQ/FAQ.js";
import SpeakerPage from "./Components/speakers/SpeakerPage.js";

const TITLE = 'Medhacks'

function App() {

  return (
    <div>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Temp} />
        <Route exact path="/2021" component={Main} />
        <Route exact path="/speakers" component={SpeakerPage} />
        <Route exact path="/schedule" component={Temp} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </div>
  );
}

export default App;
