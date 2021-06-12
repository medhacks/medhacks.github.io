import { useState } from "react";

const Pill = ({ qa, p, isLast }) => {
  const [pillClicked, setPillClicked] = useState(false);

  const styles = {
    minHeight: "60px",
    height: pillClicked ? "auto" : "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: !pillClicked ? "center" : "",
    borderRadius: "50px",
    padding: `${pillClicked ? "20px" : "0"} 10px ${
      pillClicked ? "10px" : "0"
    } 30px`,
    background: "rgb(255, 255, 255, 60%)",
    width: "360px",
    color: "black",
    boxShadow: "1px 2px 10px #646d95",
    cursor: "pointer",
    marginBottom: "20px",
  };

  return (
    <div
      onClick={() =>
        pillClicked ? setPillClicked(false) : setPillClicked(true)
      }
      className='faq-pill'
      style={styles}>
      <div>
        <div
          style={{
            marginBottom: pillClicked ? "10px" : "0px",
            color: "#60598e",
            fontWeight: "600",
            display: "flex",
          }}>
          <div style={{ display: "flex", alignItems: "center" }}>{p}</div>
          <div className='faq-pill-q'>{qa.q}</div>
        </div>
        {isLast && (
          <div
            dangerouslySetInnerHTML={
              isLast && pillClicked ? { __html: qa.a } : { __html: "" }
            }
          />
        )}
        {!isLast && <div>{pillClicked && qa.a}</div>}
      </div>
    </div>
  );
};

export default Pill;
