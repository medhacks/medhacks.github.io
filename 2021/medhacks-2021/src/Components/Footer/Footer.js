import React from "react";
import { HashLink as Link } from 'react-router-hash-link'
import { ReactComponent as Instagram } from '../../Images/instagram.svg'
import { ReactComponent as Facebook } from '../../Images/facebook.svg'

const Footer = () => {

  const container = {
    backgroundColor: '#a992ee',
    background: 'linear-gradient(0deg, #a992ee 0%, #82b4e6 46%, #b0edd6 100%)',
    display: 'inline-block',
    width: '100%',
  }

  const link = {
    color: 'white',
    marginBottom: '1%',
    fontSize: '1.2em',
  }

  const imgLink = {
    width: '5%',
    height: '5%',
    marginLeft: '1%', 
  }

  return(
    <div style={container}>
      <div className="footer-text">
        <p>
          MedHacks brings together diverse minds from all backgrounds to foster collaboration towards solving the world's most pressing medical issues.
        </p>
      </div>
      <div className="footer-links">
        <h2>quick links</h2>
        <Link style={link} to={"/2021#"} >
          home
        </Link>
        <Link style={link} to={{pathname:"https://www.google.com"}} target='blank'>
          apply
        </Link>
        <Link style={link} to={{pathname:"mailto: info@medhacks.io"}} target='blank'>
          email us
        </Link>
        <Link style={link} to={{pathname:"https://docs.google.com/document/d/1VEFstsX7jg9W7uJSyx3ty_wcU-8yiXRlpP7MAelIIHA/"}} target='blank'>
          Code of Conduct
        </Link>
        <div>
          <Link to={{pathname:"https://www.instagram.com/medhacks/"}} target='blank'>
            <Instagram className="footer-img" />
          </Link>
          <Link to={{pathname:"https://www.facebook.com/medhacks"}} target='blank'>
            <Facebook className="footer-img" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer