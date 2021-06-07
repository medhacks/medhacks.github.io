import React from "react";

const Sponsors = (props) => {
  const sponsorStyle = {
    width: "100%",
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  }

  const parentStyle = {
    margin: "auto",
    width: "60%",
    backgroundColor: 'rgb(255, 255, 255, .6)',
    disply: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }

  const primary = {
    //width: '50%',
    flexBasis: '50%',
    display: 'inline-block',
    height: '100%',
  }

  const secondary = {
    flexBasis: '25%',
    //width: '25%',
    display: 'inline-block',
    height: '100%',
  }

  return (
    <div style={{justifyContent:"center", marginTop: '10%', marginBottom: '10%'}} id="sponsors">
      <h1 style={{textAlign:"center"}}>2020 Partners</h1>

      <div style = {parentStyle}>
        <div style={secondary}>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/BME.png" alt="JHU Biomedical Engineering"></img>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/BME.png" alt="JHU Biomedical Engineering"></img>
        </div>
        <div style={primary}>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/Contrary.png" alt="Contrary Capital" />
        </div>
        <div style={secondary}>
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/GoogleCloud.png" alt="Google Cloud" />
          <img style={sponsorStyle} src="https://d2xssgyjy4ywy8.cloudfront.net/2020-logos/GoogleCloud.png" alt="Google Cloud" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors;