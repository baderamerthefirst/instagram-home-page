import React from "react";

const RightBarComps = (props) => {
  return (
    <div className="RightBarC-container">
      <div className="icon-Mtext">
        <img src={props.icon} alt="img" />
        <div className="Mtext">
          <span>{props.name}</span>
          <span>{props.subtext}</span>
        </div>
      </div>
      <span className="Btext">switch</span>
    </div>
  );
};

export default RightBarComps;
