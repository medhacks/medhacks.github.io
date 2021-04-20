import React from 'react'

function TrackPopup() {
  const popupStyle = {
    'margin-top': '5%',
    height: '80%',
    width: '60%',
    'border': '2px solid black',
    position: 'absolute',
    'background-color': '#abffd1'
  }

  return (
    <div style={popupStyle}>
      <p>
        Ooga Booba
      </p>
    </div>
  )
}

export default TrackPopup;