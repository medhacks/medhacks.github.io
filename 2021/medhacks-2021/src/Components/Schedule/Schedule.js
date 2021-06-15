import React, {useState} from 'react'
import '../../App.css'
import ScheduleTable from './ScheduleTable'

const Schedule = () => {
  const [dayActive, setDayActive] = useState("friday");

  function changeDay(day) {
    setDayActive(day);
  }

  const days = {
    display: 'flex',
    width: '60%',
    margin: 'auto',
  }

  const fridayGradient = {
    background: "linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, 0.4)) padding-box padding-box, linear-gradient(45deg, rgb(255, 255, 255, .2) 0%, rgb(176, 237, 214, .5) 100%) border-box border-box",
  }

  const saturdayGradient = {
    background: "linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, 0.4)) padding-box padding-box, linear-gradient(45deg, rgb(255, 255, 255, .2) 0%, rgb(130, 180, 230, .5) 100%) border-box border-box",
  }

  const sundayGradient = {
    background: "linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, 0.4)) padding-box padding-box, linear-gradient(45deg, rgb(255, 255, 255, .2) 0%, rgb(169, 146, 238, .5) 100%) border-box border-box",
  }

  const dayStyle = {
    flex: 1,
    display: "inline-block",
    textAlign: "center",
    margin: "3%",
    color: "white",
    height: "100%",
    borderRadius: "50px",
    height: "auto",
    justifyContent: "center",
    padding: "10px",
    alignSelf: "stretch",
    border: '6px solid transparent',
    fontWeight: "600",
    fontStyle: "italic",
  };

  return (
    <div>
      <div style={{marginTop: '5%'}}>
        <h1 className="page-title">schedule</h1>
      </div>
      <div style={days}>
        <div className="day" style={{...dayStyle, ...fridayGradient}} onClick={() => changeDay("friday")}>
          friday
        </div>
        <div className="day" style={{...dayStyle, ...saturdayGradient}} onClick={() =>changeDay("saturday")}>
          saturday
        </div>
        <div className="day" style={{...dayStyle, ...sundayGradient}} onClick={() =>changeDay("sunday")}>
          sunday
        </div>
      </div>
      <ScheduleTable 
        dayActive={dayActive}
        fridayGradient={fridayGradient}
        saturdayGradient={saturdayGradient}
        sundayGradient={sundayGradient}
      />
    </div>
  )
}

export default Schedule