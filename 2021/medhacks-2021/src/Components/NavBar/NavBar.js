import React from "react";
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {

  const container = {
    display: 'flex',
    float: 'right',
  }

  const link = {
    paddingLeft: '2vw',
    paddingRight: '1vw',
    paddingTop: '1vw',
    paddingBottom: '1vw',
    textShadow: '-1px 1px #60593E',
    fontSize: '2vh',
    fontStyle: 'italic',
    color: 'white',
    zIndex: 2,
  }

  return (
    <div className="nav-bar-container">
      <div style={container}>
        <Link style={link} to="/2021">
          home
        </Link>
        <Link style={link} to={"/2021#tracks"}>
          tracks
        </Link>
        <Link style={link} to="/speakers">
          speakers
        </Link>
        <Link style={link} to="/schedule">
          schedule
        </Link>
      </div>
      <div style={container}>
        <Link style={link} to="#sponsors">
          sponsors
        </Link>
        <Link style={link} to="/faq">
          faq
        </Link>
        <Link style={{...link, fontWeight: 'bold'}} to={{ pathname: "https://apply.medhacks.io"}} target='blank'>
          apply
        </Link>
      </div>
    </div>
  )
};

export default NavBar
