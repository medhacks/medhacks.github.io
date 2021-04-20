import React from 'react';
import '../App.css'
import TrackPopup from './TrackPopup'

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayPopup: false};
    this.trackClick = this.trackClick.bind(this);
  }

  trackClick() {
    this.setState({displayPopup: true})
  }

  render() {
    let popup;
    if (this.state.displayPopup) {
      popup = <TrackPopup />
    }
    return (
      <div style ={parentStyle}>
        {popup}
        <div style={trackStyle}>
          <div className="track" style={blockStyle} onClick={this.trackClick}>
            <h3>Track 1</h3>
            <p>
              Aging in place with resilience and resouces
            </p>
          </div>
        </div>
        <div style = {trackStyle}>
          <div className="track" style={blockStyle}>
            <h3>Track 2</h3> 
            <p>
              Personalized medicine using data driven healthcare
            </p>
          </div>
        </div>
        <div style = {trackStyle}>
          <div className="track" style={blockStyle}>
            <h3>Track 3</h3> 
            <p>
              Patient adherence and quality care during a global pandemic
            </p>
          </div>
        </div>
      </div>
    )    
  }
}

let trackText = ["one", "two", "three"]

const parentStyle = {
  margin: 'auto', 
  width: '60%',
  height: '100%',
  overflow: 'hidden',
  display: '-ms-flex',
  display: '-webkit-flex',
  display: 'flex',
}

const trackStyle = {
  width: '33.33%',
  display: 'inline-block',
  'text-align': 'center',
  margin: '3%'
}

const blockStyle = {
  'background-color': '#b089f5',
  'height': '100%',
  'border-style': 'solid',
  'border': '2px solid black',
  'border-radius': '20px',
}

export default Tracks;