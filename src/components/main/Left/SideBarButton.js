import React from "react";
import "./SideBar.css";

const SideBarButton = (props) => {
  return (
    <div onClick={()=>{alert(props.name)}} className="sideBarB-container">
      <img src={props.icon} alt="img"/>
      <span>{props.name}</span>
    </div>
  );
};

export default SideBarButton;
