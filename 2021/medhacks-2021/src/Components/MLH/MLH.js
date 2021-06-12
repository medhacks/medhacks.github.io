import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function MLH() {
  const logoStyle = {
    display: 'block',
    maxWidth: '80px',
    minWidth: '60px',
    position: 'fixed',
    left: '10px',
    top: '0',
    width: '10%',
    zIndex: '10000',
  }

  return (
    <div style={logoStyle}>
      <Link to={{pathname:"https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"}} target="blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg" alt="Major League Hacking 2021 Hackathon Season" style={{"width":"100%"}} />
      </Link>
    </div>
  )
}

export default MLH