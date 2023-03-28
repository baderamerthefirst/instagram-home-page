import React from "react";
import SideBarButton from "./SideBarButton";
import search from "../../../assets/search.png";
import home from "../../../assets/home.png";
import create from "../../../assets/create.png";
import messages from "../../../assets/messages.png";
import explore from "../../../assets/explore.png";
import notification from "../../../assets/notification.png";
import profile from "../../../assets/profile.png";
import reels from "../../../assets/reels.png";
import more from "../../../assets/more.png";
import instagram from "../../../assets/instagram.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarT">
        <div className="instagram-icon">
          <SideBarButton  icon={instagram} name="instagram" />
        </div>
        <div className="sideBarM">
          <SideBarButton icon={home} name="home" />
          <div className="search">
          <SideBarButton  icon={search} name="search" />
          </div>
          <SideBarButton icon={explore} name="explore" />
          <SideBarButton icon={reels} name="reels" />
          <SideBarButton icon={messages} name="messages" />
          <div className="notification">
          <SideBarButton  icon={notification} name="notification" />
          </div>
          <SideBarButton icon={create} name="create" />
          <SideBarButton icon={profile} name="profile" />
        </div>
      </div>
      <div className="more">
        <SideBarButton icon={more} name="more" />
      </div>
    </div>
  );
};

export default SideBar;
