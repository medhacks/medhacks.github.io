import React, { useRef, useEffect, useState } from "react";
import Countdown from "react-countdown";
import "../../App.css";

const Timer = () => {
  const ref: any = useRef(null);
  const [myWidth, setWidth] = useState<number>(100);

  useEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current != null) {
        setWidth(ref.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  const containerStyle = {
    backgroundColor: "rgb(255, 255, 255, 60%)",
    border: "6px solid transparent",
    borderRadius: "50px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 25%)",
    color: "black",
  };

  const unitContainer: React.CSSProperties = {
    display: "flex",
    fontSize: ".3em",
    justifyContent: "space-evenly",
    textAlign: "center",
    margin: "auto",
  };

  const units = {
    width: "23%",
  };

  const containerStyles: React.CSSProperties = {
    ...unitContainer,
    width: myWidth * 1.06,
  };

  return (
    <div style={containerStyle}>
      <div ref={ref} style={{ width: "fit-content", margin: "auto" }}>
        <Countdown date={new Date(2021, 8, 10, 18, 0, 0)} />
      </div>
      <div style={containerStyles}>
        <p style={units}>Days</p>
        <p style={units}>Hours</p>
        <p style={units}>Minutes</p>
        <p style={units}>Seconds</p>
      </div>
    </div>
  );
};
export default Timer;
