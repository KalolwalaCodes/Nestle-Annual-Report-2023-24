import React,{ useState } from "react"
import BarChart from "../../Components/Chart/Chart";
import './FinincalHilights.css'
import ExcelData from "../../Components/ExcelData/ExcelData";
const FinincalHilight = () => {
    const [activeBtn,setActiveBtn]=useState('bar-graph');
  return (
    <div className='finincial-hilights-main-container'>
      <div className="toggle-tabs">
        <button className={`toggle-tabs-button ${activeBtn==='bar-graph'?'active':''}`} onClick={()=>setActiveBtn('bar-graph')}>View Chart</button>
        <button  className={`toggle-tabs-button ${activeBtn==='finincal-hilights'?'active':''}`} onClick={()=>setActiveBtn('finincal-hilights')}>View Data</button>
      </div>
      <div className="main-container-content-graph">
      {
        activeBtn==='bar-graph'?<BarChart/>:<ExcelData/>
      }
      </div>
    </div>
  )
}

export default FinincalHilight
