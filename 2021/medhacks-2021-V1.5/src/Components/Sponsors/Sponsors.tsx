import { useEffect, useState } from "react";
import { sponsorsData } from "./SponsorsData";

const Sponsors = () => {
  const [i, setI] = useState(2);

  useEffect(() => {
    setTimeout(() => setI((i + 1) % 3), 4000);
  }, [i]);

  return (
    <div
      style={{ justifyContent: "center", marginTop: "50px", height: "40vh" }}
      id="sponsors"
    >
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontWeight: "900" }}
      >
        sponsors
      </h1>
      <div className={i === 0 ? "fade-in" : "fade-out"}>{sponsorsData[0]}</div>
      <div className={i === 1 ? "fade-in" : "fade-out"}>{sponsorsData[1]}</div>
      <div className={i === 2 ? "fade-in" : "fade-out"}>{sponsorsData[2]}</div>
    </div>
  );
};

export default Sponsors;
