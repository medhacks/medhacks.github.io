import Pill from "./Pill";
import { FAQData as data } from "./FAQData";

const FAQ = () => {
  return (
    <>
      <div style={titleStyle}>faq</div>
      {data.map((pair, i) => (
        <div style={colStyle}>
          <div style={rowStyle}>
            <Pill
              customStyles={i === data.length - 1 ? null : pillStyle}
              qa={pair[0]}
            />
            {i !== data.length - 1 && <Pill qa={pair[1]} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;

const titleStyle = {
  textAlign: "center",
  marginTop: "40px",
  marginBottom: "48px",
  fontStyle: "italic",
  fontWeight: "900",
  fontSize: "5rem",
  color: "white",
};

const colStyle = {
  display: "flex",
  flexDirection: "col",
  justifyContent: "center",
  paddingBottom: "24px",
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const pillStyle = {
  marginRight: "52px",
};
