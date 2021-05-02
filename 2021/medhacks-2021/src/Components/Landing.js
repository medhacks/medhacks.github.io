import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

import pieces from '../Images/adjustedfade.png'
import background from '../Images/gradient_wide.png'
import text from '../Images/updated_mh_text_cropped.png'
import Main from './Main'

const TITLE = 'Medhacks'

const Landing = (Props) => {
  const backgroundStyle = {
    display: 'block',
    zIndex: 0,
    minHeight: '100%',
    minWidth: '100%',
    position: 'fixed',
    top: 0,
  }

  const piecesStyle = {
    zIndex: 1,
    position: 'fixed',
    left: '50%',
    top: '50%',
    minWidth: '100%',
    transform: 'translate(-50%, -50%)',
  }

  const textStyle = {
    zIndex: 2,
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    minWidth: '50%'
  }

  return (
    <div>
      <div style={{overflow:'hidden', height:'100%', width:'100%'}}>
        <img style = {backgroundStyle} src={background} alt="Landing Page Background"></img>
        <img style = {piecesStyle} src={pieces} alt="Landing Page Background"></img>
        <img style = {textStyle} src={text} alt="Landing Page Background"></img>
      </div>
    </div>
  )
}

export default Landing