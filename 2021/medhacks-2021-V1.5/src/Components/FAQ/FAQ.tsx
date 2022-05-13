import Pill from "./Pill";
import { FAQData as data } from "./FAQData";

const FAQ = () => {
  return (
    <div style={{ width: "100%", height: "100%", padding: "0 40px 0 40px" }}>
      <div style={titleStyle}>
        <div>faq</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="faq-pill-col"
      >
        <div className="faq-pill-col">
          {data.map((pair, i) => (
            <Pill qa={pair[0]} p={pair[0].p} isLast={i === data.length - 1} />
          ))}
        </div>
        <div className="faq-pill-col">
          {data.map(
            (pair, i) =>
              i !== data.length - 1 && (
                <Pill qa={pair[1]} p={pair[1].p} isLast={false} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const titleStyle: React.CSSProperties = {
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
