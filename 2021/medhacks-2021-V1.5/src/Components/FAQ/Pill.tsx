import { useState } from "react";

const Pill = ({ qa, p, isLast }: { qa: any; p: any; isLast: boolean }) => {
  const [pillClicked, setPillClicked] = useState(false);

  const styles: React.CSSProperties = {
    minHeight: "60px",
    maxHeight: pillClicked ? "500px" : "60px",
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
    paddingTop: pillClicked ? "20px" : "17.9px",
    marginBottom: "20px",
    marginRight: "30px",
    transition: "max-height 0.5s ease-in-out",
  };

  const hidden = {
    height: !pillClicked ? 0 : "",
    opacity: !pillClicked ? 0 : 1,
    transition: "height 0.5s ease-in-out, opacity 0.5s linear",
    paddingBottom: "20px",
  };

  return (
    <div
      onClick={() =>
        pillClicked ? setPillClicked(false) : setPillClicked(true)
      }
      className="faq-pill"
      style={styles}
    >
      <div>
        <div
          style={{
            marginBottom: pillClicked ? "10px" : "0px",
            color: "#60598e",
            fontWeight: "600",
            display: "flex",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>{p}</div>
          <div className="faq-pill-q">{qa.q}</div>
        </div>
        {isLast && (
          <div dangerouslySetInnerHTML={{ __html: qa.a }} style={hidden} />
        )}
        {!isLast && <div style={hidden}>{pillClicked && qa.a}</div>}
      </div>
    </div>
  );
};

export default Pill;
