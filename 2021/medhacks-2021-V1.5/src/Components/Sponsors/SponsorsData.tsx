const sponsorStyle: React.CSSProperties = {
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
};

const parentStyle: React.CSSProperties = {
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "space-around",
  marginTop: "2%",
  paddingTop: "2%",
  paddingBottom: "2%",
  zIndex: "-1",
};

const primary: React.CSSProperties = {
  flexBasis: "46%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  zIndex: "0",
};

const secondary: React.CSSProperties = {
  flexBasis: "20%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: "0",
};

export const sponsorsData = [
  <>
    <div style={parentStyle} className="sponsor-container">
      <div style={secondary}>
        <a href="https://www.new-innov.com/pub/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/NI.png"
            }
            alt="New Innovations"
          ></img>
        </a>
        <a href="https://www.echoar.xyz/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/echoAR.png"
            }
            alt="echoAR"
          ></img>
        </a>
        <a href="https://malonecenter.jhu.edu/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/malone-center.png"
            }
            alt="The Malone Center for Engineering in Healthcare"
          ></img>
        </a>
      </div>
      <div style={primary}>
        <a href="https://cbid.bme.jhu.edu/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/CBID.png"
            }
            alt="Center for Bioengineering Innovation and Design"
          ></img>
        </a>
      </div>
      <div style={secondary}>
        <a href="https://www.healthxventures.com/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/healthx.png"
            }
            alt="HealthX Ventures "
          ></img>
        </a>
        <a href="https://nursing.jhu.edu/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/nursing.png"
            }
            alt="School of Nursing at Johns Hopkins University"
          ></img>
        </a>
        <a
          href="https://ventures.jhu.edu/programs-services/fastforward-u/"
          target="_blank"
        >
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/FFU.png"
            }
            alt="Fast Forward U"
          ></img>
        </a>
      </div>
    </div>
  </>,
  <>
    <div style={parentStyle} className="sponsor-container">
      <div style={secondary}>
        <a href="https://www.tedcomd.com/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/TEDCO.png"
            }
            alt="Maryland Technology Development Corporation"
          ></img>
        </a>
        <a href="https://www.mathworks.com/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/mathworks.svg"
            }
            alt="MathWorks"
          ></img>
        </a>
      </div>
      <div style={primary}>
        <a href="https://www.carefirst.com/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/careFirst.png"
            }
            alt="CareFirst BlueCross BlueShield"
          ></img>
        </a>
      </div>
      <div style={secondary}>
        <a href="https://a3.ai/" target="_blank">
          <img
            style={{ ...sponsorStyle, width: "80%" }}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/a3ai.png"
            }
            alt="A3 AI"
          ></img>
        </a>
        <a href="https://idies.jhu.edu/" target="_blank">
          <img
            style={{ ...sponsorStyle, width: "80%" }}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/idies.png"
            }
            alt="The Institute for Data Intensive Engineering and Science"
          ></img>
        </a>
      </div>
    </div>
  </>,
  <>
    <div style={parentStyle} className="sponsor-container">
      <div style={secondary}>
        <a href="https://cloud.google.com/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/google-cloud.png"
            }
            alt="Google Cloud"
          ></img>
        </a>
        <a href="https://www.hopkinsmedicine.org/som/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/medicine.png"
            }
            alt="Johns Hopkins School of Medicine"
          ></img>
        </a>
      </div>
      <div style={primary}>
        <a href="https://www.jhuapl.edu/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/apl.png"
            }
            alt="Applied Physics Laboratory"
          ></img>
        </a>
      </div>
      <div style={secondary}>
        <a href="https://www.i-biomed.com/" target="_blank">
          <img
            style={{ ...sponsorStyle, width: "80%" }}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/IBT.png"
            }
            alt="Infinite Biomedical Tech"
          ></img>
        </a>
        <a href="https://www.jhsph.edu/" target="_blank">
          <img
            style={sponsorStyle}
            src={
              "https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/bloomberg.png"
            }
            alt="Johns Hopkins Bloomberg School of Public Health"
          ></img>
        </a>
      </div>
    </div>
  </>,
];
