import React from "react";
import "./MainArea.css";
import Post from "./Post";

const MainArea = (props) => {
  const rand = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <div className="MainArea">
      <div className="Stories">stories</div>
      <div className="Feed">
        <Post
          PostProfileImg={"https://loremflickr.com/320/240?1"}
          PostProfileName={"mmmom112"}
          />
        <Post
          PostProfileImg={"https://loremflickr.com/320/240?2"}
          PostProfileName={"saaa1234"}
          />
        <Post
          PostProfileImg={"https://loremflickr.com/320/240?3"}
          PostProfileName={"mass6644"}
          />
          {Array(10)
            .fill()
            .map((_, index) => (
              <Post
                key={index}
                PostProfileImg={"https://loremflickr.com/320/240?0"}
                PostProfileName={"Baa111"}
              />
            ))}
      </div>
    </div>
  );
};

export default MainArea;
