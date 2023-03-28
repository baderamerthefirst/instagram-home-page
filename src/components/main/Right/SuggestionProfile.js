import React from 'react'
import BlueCheck from "../../../assets/BlueCheck.png";


const SuggestionProfile = (props) => {
  return (
    <div className="Sprofile-container">
      <div className="icon-Mtext">
        <img className='Pimg' src={props.icon} alt="img" />
        <div className="Mtext">
          <span>{props.name} <img height={'15px'} width={'15px'} src={BlueCheck}></img></span>
          <span>{props.subtext}</span>
        </div>
      </div>
      <span className="Btext">follow</span>
    </div>
  )
}

export default SuggestionProfile