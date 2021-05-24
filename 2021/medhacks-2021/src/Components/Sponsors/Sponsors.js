import React from "react";

const Sponsors = (props) => {
  const sponsorStyle = {
    width: "33%",
    display: "inline-block",
  }

  const parentStyle = {
    margin: "auto",
    width: "60%",
  }

  return (
    <div style={{justifyContent:"center"}} id="sponsors">
      <h1 style={{textAlign:"center"}}>2020 Partners</h1>

      <div style = {parentStyle}>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/BME.png"
                  alt="JHU Biomedical Engineering"></img>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/Contrary.png"
                      alt="Contrary Capital" />
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/GoogleCloud.png"
                      alt="Google Cloud" />
      </div>
    </div>
  )
}

export default Sponsors;