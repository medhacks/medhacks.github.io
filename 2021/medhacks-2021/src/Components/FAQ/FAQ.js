import Pill from "./Pill";
import { FAQData as data } from "./FAQData";
import Puzzle7 from "../../Images/puzzlePieces/7.png";
import Puzzle8 from "../../Images/puzzlePieces/8.png";

const FAQ = () => {
  return (
    <div style={{ width: "100%", height: "100%", padding: "0 40px 0 40px" }}>
      <div style={titleStyle}>
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={Puzzle8}
          alt="puzzle 8"
        />
        <div>faq</div>
        <img
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
          src={Puzzle7}
          alt="puzzle 7"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="faq-pill-col">
          {data.map((pair, i) => (
            <Pill qa={pair[0]} p={pair[0].p} isLast={i === data.length - 1} />
          ))}
        </div>
        <div className="faq-pill-col">
          {data.map(
            (pair, i) =>
              i !== data.length - 1 && <Pill qa={pair[1]} p={pair[1].p} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const titleStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "60px",
  marginBottom: "48px",
  fontStyle: "italic",
  fontWeight: "900",
  fontSize: "5rem",
  color: "white",
  width: "100%",
  height: "100%",
};
