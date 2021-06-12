import { HashLink as Link } from 'react-router-hash-link'

import { default as careFirst } from '../../Images/Sponsors/logo-carefirst.svg'

import cbid from '../../Images/Sponsors/cbid.png'
import newInnovations from '../../Images/Sponsors/newInnovations.jpg'
import healthx from '../../Images/Sponsors/healthx.png'
import nursing from '../../Images/Sponsors/nursing.png'
import malone from '../../Images/Sponsors/malone-center.png'
import tedco from '../../Images/Sponsors/tedco.png'
import infinite from '../../Images/Sponsors/infinite.jpg'
import cloud from '../../Images/Sponsors/google-cloud.png'
import idies from '../../Images/Sponsors/idies.png'
import echoAR from '../../Images/Sponsors/echoAr.webp'
import ffu from '../../Images/Sponsors/fastforward.jpg'
import mathWorks from '../../Images/Sponsors/math-works.png'

const sponsorStyle = {
  width: "80%",
  //height: '20%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
}

const parentStyle = {
  margin: "auto",
  //backgroundColor: 'rgb(255, 255, 255, .6)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  marginTop: '2%',
  paddingTop: '2%',
  paddingBottom: '2%',
}

const primary = {
  flexBasis: '46%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

const secondary = {
  flexBasis: '22%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

export const sponsorsData = [
  <>
    <div style = {parentStyle} className="sponsor-container">
        <div style={secondary}>
          <Link to={{ pathname: "https://www.new-innov.com/pub/"}} target='blank'>
            <img style={sponsorStyle} src={newInnovations} alt="New Innovations"></img>
          </Link>
          <Link to={{ pathname: "https://malonecenter.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={malone} alt="The Malone Center for Engineering in Healthcare"></img>
          </Link>
          <Link to={{ pathname: "https://www.tedcomd.com/"}} target='blank'>
            <img style={sponsorStyle} src={tedco} alt="Maryland Technology Development Corporation"></img>
          </Link>
          <Link to={{ pathname: "https://idies.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={idies} alt="The Institute for Data Intensive Engineering and Science"></img>
          </Link>
          <Link to={{ pathname: "https://cloud.google.com/"}} target='blank'>
            <img style={sponsorStyle} src={cloud} alt="Google Cloud"></img>
          </Link>
          <Link to={{ pathname: "https://ventures.jhu.edu/programs-services/fastforward-u/"}} target='blank'>
            <img style={sponsorStyle} src={ffu} alt="Fast Forward U"></img>
          </Link>
        </div>
        <div style={primary}>
          <Link to={{ pathname: "https://cbid.bme.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={cbid} alt="Center for Bioengineering Innovation and Design"></img>
          </Link>
          <Link to={{ pathname: "https://www.carefirst.com/"}} target='blank'>
          <img style={sponsorStyle} src={careFirst} alt="CareFirst BlueCross BlueShield"></img>
          </Link>
        </div>
        <div style={secondary}>
          <Link to={{ pathname: "https://www.healthxventures.com/"}} target='blank'>
            <img style={sponsorStyle} src={healthx} alt="HealthX Ventures "></img>
          </Link>
          <Link to={{ pathname: "https://nursing.jhu.edu/"}} target='blank'>
            <img style={sponsorStyle} src={nursing} alt="School of Nursing at Johns Hopkins University"></img>
          </Link>
          <Link to={{ pathname: "https://www.echoar.xyz/"}} target='blank'>
            <img style={sponsorStyle} src={echoAR} alt="echoAR"></img>
          </Link>
          <Link to={{ pathname: "https://www.mathworks.com/"}} target='blank'>
            <img style={sponsorStyle} src={mathWorks} alt="MathWorks"></img>
          </Link>
          <Link to={{ pathname: "https://www.i-biomed.com/"}} target='blank'>
            <img style={sponsorStyle} src={infinite} alt="Infinite Biomedical Tech"></img>
          </Link>
          
        </div>
      </div>
  </>,
]