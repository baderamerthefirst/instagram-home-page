import React from "react";
import threedots from "../../../assets/threedots.png";
import BlueCheck from "../../../assets/BlueCheck.png";

const PostProfile = (props) => {
  return (
    <div className="PostProfile">
      <div className="left">
        <img className="pi" src={props.PostProfileImg} alt="s"></img>
        <span className="ppn">{props.PostProfileName}</span>
        <img className="bc" src={BlueCheck} alt="s"></img>
      </div>

      <img className="right" src={threedots} alt="s"></img>
    </div>
  );
};

export default PostProfile;
