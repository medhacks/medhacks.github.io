import { HashLink as Link } from 'react-router-hash-link'

const sponsorStyle = {
  width: "90%",
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
}

const parentStyle = {
  margin: "auto",
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  marginTop: '2%',
  paddingTop: '2%',
  paddingBottom: '2%',
  zIndex: '-1',
}

const primary = {
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  zIndex: '0',
}

const secondary = {
  flexBasis: '25%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  zIndex: '0',
}

export const sponsorsData = [
  <>
    <div style = {parentStyle} className="sponsor-container">
        <div style={secondary}>
          <Link to={{ pathname: "https://www.new-innov.com/pub/"}} target='blank'>
            <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/NI.png"} alt="New Innovations"></img>
          </Link>
          <Link to={{ pathname: "https://malonecenter.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/malone-center.png"} alt="The Malone Center for Engineering in Healthcare"></img>
          </Link>
        </div>
        <div style={primary}>
          <Link to={{ pathname: "https://cbid.bme.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/CBID.png"} alt="Center for Bioengineering Innovation and Design"></img>
          </Link>
        </div>
        <div style={secondary}>
          <Link to={{ pathname: "https://www.healthxventures.com/"}} target='blank'>
            <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/healthx.png"} alt="HealthX Ventures "></img>
          </Link>
          <Link to={{ pathname: "https://nursing.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/nursing.png"} alt="School of Nursing at Johns Hopkins University"></img>
          </Link>
        </div>
      </div>
  </>,
  <>
    <div style = {parentStyle} className="sponsor-container">
      <div style={secondary}>
        <Link to={{ pathname: "https://www.tedcomd.com/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/TEDCO.jpg"} alt="Maryland Technology Development Corporation"></img>
        </Link>
        <Link to={{ pathname: "https://idies.jhu.edu/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/IDIES.png"} alt="The Institute for Data Intensive Engineering and Science"></img>
        </Link>
      </div>
      <div style={primary}>
        <Link to={{ pathname: "https://www.carefirst.com/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/logo-carefirst.svg"} alt="CareFirst BlueCross BlueShield"></img>
        </Link>
      </div>
      <div style={secondary}>
        <Link to={{ pathname: "https://www.echoar.xyz/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/echoAR.png"} alt="echoAR"></img>
        </Link>
        <Link to={{ pathname: "https://www.mathworks.com/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/mathworks.svg"} alt="MathWorks"></img>
        </Link>
      </div>
    </div>
  </>,
  <>
    <div style = {parentStyle} className="sponsor-container">
      <div style={secondary}>
        <Link to={{ pathname: "https://cloud.google.com/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/google-cloud.png"} alt="Google Cloud"></img>
        </Link>
        <Link to={{ pathname: "https://ventures.jhu.edu/programs-services/fastforward-u/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/fastforward.jpg"} alt="Fast Forward U"></img>
        </Link>
      </div>
      <div style={primary}>
        <Link to={{ pathname: "https://www.jhuapl.edu/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/apl.png"} alt="Applied Physics Laboratory"></img>
        </Link>
      </div>
      <div style={secondary}>
        <Link to={{ pathname: "https://www.i-biomed.com/"}} target='blank'>
          <img style={sponsorStyle} src={"https://mmedhacks-2021-website.s3.amazonaws.com/Sponsors/IBT.png"} alt="Infinite Biomedical Tech"></img>
        </Link>
      </div>
    </div>
  </>,
]