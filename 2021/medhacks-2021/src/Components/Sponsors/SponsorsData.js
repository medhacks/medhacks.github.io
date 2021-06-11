import { HashLink as Link } from 'react-router-hash-link'

import { default as careFirst } from '../../Images/Sponsors/logo-carefirst.svg'
import { ReactComponent as Facebook } from '../../Images/facebook.svg'

import cbid from '../../Images/Sponsors/cbid.png'
import newInnovations from '../../Images/Sponsors/newInnovations.jpg'
import healthx from '../../Images/Sponsors/healthx.png'
import nursing from '../../Images/Sponsors/nursing.png'
import malone from '../../Images/Sponsors/malone-center.png'
import tedco from '../../Images/Sponsors/tedco.png'
import infinite from '../../Images/Sponsors/infinite.jpg'
import cloud from '../../Images/Sponsors/google-cloud.png'
import idies from '../../Images/Sponsors/idies.png'
import echoAR from '../../Images/Sponsors/echoar.png'
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
  width: "70%",
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
    <div style = {parentStyle}>
        <div style={secondary}>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={newInnovations} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={malone} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={cloud} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={idies} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={echoAR} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={ffu} alt="JHU Biomedical Engineering"></img>
          </Link>
        </div>
        <div style={primary}>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={cbid} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
          <img style={sponsorStyle} src={careFirst} alt="JHU Biomedical Engineering"></img>
          </Link>
        </div>
        <div style={secondary}>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={healthx} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={nursing} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={tedco} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={mathWorks} alt="JHU Biomedical Engineering"></img>
          </Link>
          <Link to={{ pathname: "https://www.google.com"}} target='blank'>
            <img style={sponsorStyle} src={infinite} alt="JHU Biomedical Engineering"></img>
          </Link>
          
        </div>
      </div>
  </>,
]