import React from "react";
import { sponsorsData } from "./SponsorsData";
import { ReactComponent as careFirst } from '../../Images/Sponsors/logo-carefirst.svg'

const Sponsors = (props) => {

  return (
    <div style={{justifyContent:"center", marginTop: '10%', marginBottom: '10%'}} id="sponsors">
      <h1 style={{textAlign:"center", fontStyle:"italic", fontWeight:"900"}}>sponsors</h1>
      {sponsorsData[0]}
    </div>
  )
}

export default Sponsors;