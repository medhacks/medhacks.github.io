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

  const info = {
    width: '30%',
    marginLeft: '5%',
    marginTop: '5%',
    marginRight: '0',
    float: 'left',
  }

  const linkContainer = {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    paddingRight: '5%',
    paddingBottom: '5%',
    marginTop: '5%',
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
      <div style={info}>
        <p>
          MedHacks brings together diverse minds from all backgrounds to foster collaboration towards solving the world's most pressing medical issues.
        </p>
      </div>
      <div style={linkContainer}>
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
        <Link style={link} to={{pathname:"https://www.google.com"}} target='blank'>
          MLH Code of Conduct
        </Link>
        <div>
          <Link to={{pathname:"https://www.instagram.com/medhacks/"}} target='blank'>
            <Instagram style={imgLink} />
          </Link>
          <Link style={imgLink} to={{pathname:"https://www.facebook.com/medhacks"}} target='blank'>
            <Facebook style={imgLink} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer