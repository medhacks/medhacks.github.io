import React from "react";
import { HashLink as Link } from 'react-router-hash-link'

const Instagram = 'https://mmedhacks-2021-website.s3.amazonaws.com/instagram.svg'
const Facebook = 'https://mmedhacks-2021-website.s3.amazonaws.com/facebook.svg'

const Pieces = 'https://mmedhacks-2021-website.s3.amazonaws.com/footer_2.png'
const Logo = 'https://mmedhacks-2021-website.s3.amazonaws.com/mhtextwhiteonly.png'

const Footer = () => {

  const container = {
    paddingTop: '2%',
    display: 'inline-block',
    width: '100%',
    backgroundImage: 'url(' + Pieces+ ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundSize: '100%'
  }

  const link = {
    color: 'white',
    marginBottom: '1%',
    fontSize: '1.2em',
    float: 'right',
  }

  const whiteContainer = {
    backgroundColor: 'rgb(100, 100, 100, .4)',
    boxShadow: "0px 0px 50px rgba(100,100,100,.5)",
    borderRadius: '10px',
    width: '80%',
    marginLeft: '10%',
    marginBottom: '5%',
    paddingBottom: '2%',
  }

  const logoStyle = {
    maxWidth: '80%',
    marginBottom: '10%',
  }

  return(
    <div style={container}>
      <div style={whiteContainer}>
        <div className="footer-text">
          <img style={logoStyle} src={Logo} alt="MedHacks Logo"></img>
          <p>
            MedHacks brings together diverse minds from all backgrounds to foster collaboration towards solving the world's most pressing medical issues.
          </p>
        </div>
        <div className="footer-links">
          <h2>quick links</h2>
          <Link style={link} to={"/2021#"} >
            home
          </Link>
          <Link style={link} to={{pathname:"https://apply.medhacks.io"}} target='blank'>
            apply
          </Link>
          <Link style={link} to={{pathname:"mailto: info@medhacks.io"}} target='blank'>
            email us
          </Link>
          <Link style={link} to={{pathname:"https://docs.google.com/document/d/1VEFstsX7jg9W7uJSyx3ty_wcU-8yiXRlpP7MAelIIHA/"}} target='blank'>
            code of conduct
          </Link>
          <div>
            <Link to={{pathname:"https://www.instagram.com/medhacks/"}} target='blank' style={logoStyle}>
              <img src={Instagram} alt="Instagram" className="footer-img"/>
            </Link>
            <Link to={{pathname:"https://www.facebook.com/medhacks"}} target='blank' style={logoStyle}>
              <img src={Facebook} alt="FaceBook" className="footer-img"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer