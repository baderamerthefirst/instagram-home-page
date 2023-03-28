import React from 'react'
import "./RightBar.css";
import Suggestions from './Suggestions';
import RightBarComps from './RightBarComps';


const RightBar = (props) => {
  return (
    <div className="RightBar">
    
      <div className="RightBarT">
        <RightBarComps icon={"https://loremflickr.com/320/240?1000"} name="saaa3" subtext="momo mo" />
       
      </div>
      <div className="RightBarM">
      <Suggestions/>
      </div>
      <div className="RightBarB">
        <span>About.</span>
        <span>Help.</span>
        <span>Press.</span>
        <span>Api.</span>
        <span>Jobs.</span>
        <span>Privacy.</span>
        <span>Terms.</span>
        <span>Locaion.</span>
        <span>Language.</span>
        <span>Meta Verified.</span>

       
      </div>
      <div className="RightBarB">
        <span>&copy; 2023 INSTEGRAM CLONE FROM ME.</span>
        
       
      </div>
     
    </div>
  )
}

export default RightBar