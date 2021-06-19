import React, { useEffect, useState } from "react";
import { sponsorsData } from "./SponsorsData";
import { ReactComponent as careFirst } from '../../Images/Sponsors/logo-carefirst.svg'

const Sponsors = (props) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    setTimeout(() => setI((i + 1) % 3), 4000);
  }, [i])


  return (
    <div style={{justifyContent:"center", marginTop: '10%', height: '40vh'}} id="sponsors">
      <h1 style={{textAlign:"center", fontStyle:"italic", fontWeight:"900"}}>sponsors</h1>
      <div className={i === 0 ? 'fade-in' : 'fade-out'}>
        {sponsorsData[0]}
      </div>
      <div className={i === 1 ? 'fade-in' : 'fade-out'}>
        {sponsorsData[1]}
      </div>
      <div className={i === 2 ? 'fade-in' : 'fade-out'}>
        {sponsorsData[2]}
      </div>
    </div>
  )
}

export default Sponsors;