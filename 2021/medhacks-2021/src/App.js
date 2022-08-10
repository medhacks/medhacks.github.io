import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./Components/Main.js";
import { Helmet } from "react-helmet";
import FAQ from "./Components/FAQ/FAQ.js";
import SpeakerPage from "./Components/speakers/SpeakerPage.js";
import Schedule from "./Components/Schedule/Schedule";
import NavBar from "./Components/NavBar/NavBar";
import Sponsors from "./Components/Sponsors/Sponsors";
import Footer from "./Components/Footer/Footer";
import MLH from "./Components/MLH/MLH";

const TITLE = "Medhacks";

function App() {
  const appStyle = {
    backgroundColor: "#a992ee",
    background:
      "linear-gradient(135deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)",
    overflowX: "hidden",
    color: "white",
  };

  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash === "#/join")
      window.location.replace("https://forms.gle/mf5eovQLuSo5HUHYA");
  }, [window.location.hash]);

  return (
    <div style={appStyle}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <MLH />
      <NavBar />
      <Switch>
        <Route path="/" element={<App />}>
          <Route exact path="/speakers" component={SpeakerPage} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/faq" component={FAQ} />
          <Route
            path="/apply"
            component={() => {
              window.location.href = "https://apply.medhacks.io";
              return null;
            }}
          />
          <Route exact path="/" component={Main} />
        </Route>
      </Switch>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
