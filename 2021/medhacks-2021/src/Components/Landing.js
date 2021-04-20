import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

import image from '../Images/landingImage.png'
import Main from './Main'

const Landing = (Props) => {
  const imgStyle = {
    height: '100vh',
    'margin-left': 'auto',
    'margin-right': 'auto',
    display: 'block',
  }

  const buttonStyle = {
    position: 'absolute',
    height: '5%',
    width: '20%',
    top: '55%',
    left: '45%',
    color: 'white',
    'font-size': '60px',
  }

  return (
    <div style={{overflow:'hidden', height:'100vh', width:'100%'}}>
      <img style = {imgStyle} src={image} alt="Landing Image"></img>
        <p style = {buttonStyle} >
          <Link to="/2021">
            apply now
          </Link>
        </p>
    </div>
  )
}

export default Landing