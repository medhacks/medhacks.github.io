const Pill = ({ customStyles, question }) => {
  return (
    <div style={{ ...customStyles, ...styles }}>
      <div>{question}</div>
    </div>
  );
};

export default Pill;

const styles = {
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "50px",
  padding: "0 20px 0 20px",
  background: "white",
  width: "360px",
  textAlign: "center",
};
