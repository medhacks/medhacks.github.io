import React, { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import { Helmet } from "react-helmet";
import FAQ from "./Components/FAQ/FAQ";
import SpeakerPage from "./Components/speakers/SpeakerPage";
import Schedule from "./Components/Schedule/Schedule";
import NavBar from "./Components/NavBar/NavBar";
import Sponsors from "./Components/Sponsors/Sponsors";
import Footer from "./Components/Footer/Footer";
import MLH from "./Components/MLH/MLH";

const TITLE = "Medhacks";

function App() {
  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash === "#/join")
      window.location.replace("https://forms.gle/mf5eovQLuSo5HUHYA");
  }, [window.location.hash]);

  return (
    <div
      style={{
        backgroundColor: "#a992ee",
        background:
          "linear-gradient(135deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)",
        overflowX: "hidden",
        color: "white",
      }}
    >
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <MLH />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="speakers" element={<SpeakerPage />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="faq" element={<FAQ />} />
          <Route
            path="apply"
            element={<Navigate replace to="https://apply.medhacks.io" />}
          />
        </Route>
      </Routes>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
