import React from 'react'
import Timer from 'react-countdown'
import '../../App.css'

const Countdown = () => {
  
  const containerStyle = {
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'rgb(169, 146, 238, 50%)',
    border: '6px solid transparent',
    borderRadius: "50px",
    boxShadow: "7px 7px 7px rgb(0 0 0 / 25%)",
  }

  return (
    <div style={containerStyle}>
      <Timer date={new Date(2021, 8, 10, 18, 0, 0)} />
    </div>
  )
}

export default Countdown