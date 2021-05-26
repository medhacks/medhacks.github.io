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
    width: '80%',
    margin: 'auto',
  }

  const fridayGradient = {
    background: "linear-gradient(rgb(169, 146, 238, 70%), rgb(169, 146, 238, 70%)) padding-box, linear-gradient(45deg, #ffffff 0%, #b0edd6 100%) border-box",
  }

  const saturdayGradient = {
    background: "linear-gradient(rgb(169, 146, 238, 70%), rgb(169, 146, 238, 70%)) padding-box, linear-gradient(45deg, #ffffff 0%, #82b4e6 100%) border-box",
  }

  const sundayGradient = {
    background: "linear-gradient(rgb(169, 146, 238, 70%), rgb(169, 146, 238, 70%)) padding-box, linear-gradient(45deg, #ffffff 0%, #a992ee 100%) border-box",
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