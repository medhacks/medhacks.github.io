import { useState } from "react";

const Pill = ({ customStyles, qa }) => {
  const [pillClicked, setPillClicked] = useState(false);

  const styles = {
    minHeight: "60px",
    height: pillClicked ? "auto" : "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "50px",
    padding: `${pillClicked ? "20px" : "0"} 30px ${
      pillClicked ? "20px" : "0"
    } 30px`,
    background: "white",
    width: "360px",
    color: "black",
    boxShadow: "1px 2px 10px #646d95",
  };

  return (
    <div
      onClick={() =>
        pillClicked ? setPillClicked(false) : setPillClicked(true)
      }
      style={{ ...customStyles, ...styles }}
    >
      <div>
        <div
          style={{
            marginBottom: pillClicked ? "10px" : "0px",
            color: "#60598e",
            fontWeight: "600",
          }}
        >
          {qa.q}
        </div>
        <div>{pillClicked && qa.a}</div>
      </div>
    </div>
  );
};

export default Pill;
