import Pill from "./Pill";
import { FAQData as data } from "./FAQData";

const FAQ = () => {
  return (
    <>
      <h1 style={titleStyle}>faq</h1>
      {data.map((question, index) => (
        <div style={colStyle}>
          <div style={rowStyle}>
            <Pill customStyles={pillStyle} question={question[0]} />
            <Pill question={question[1]} />
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;

const titleStyle = {
  textAlign: "center",
  marginBottom: "48px",
  fontStyle: "italic",
  fontWeight: "900",
  fontSize: "6.5em",
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
