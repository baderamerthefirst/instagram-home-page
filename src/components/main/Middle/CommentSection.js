import React from "react";
import emoji from "../../../assets/emoji.png";
import love from "../../../assets/notification.png";
import comment from "../../../assets/comment.png";
import send from "../../../assets/messages.png";
import save from "../../../assets/save.png";

import CommnetBoxPage from "./CommnetBoxPage";

const CommentSection = () => {
  return (
    <div className="CommentSection">
      <div className="commentT">
        <div>
          <img src={love} alt="like"></img>
          <img src={comment}alt="comment"></img>
          <img src={send} alt="send"></img>
        </div>
        <img src={save} alt="save"></img>
      </div>
      <span className="likes">20 likes</span>

      <div className="commentBox">
      <span><a >name ,</a></span>
      <span>I take my book in my hand and read it for hours to get away from the world, don't simplify everything, please, it's special and beautiful that some things stay naturally with its difficulty...</span>
      <span>I take my book in my hand and read it for hours to get away from the world, don't simplify everything, please, it's special and beautiful that some things stay naturally with its difficulty...</span>
      <span className="showMore">show more</span>
      </div>

      <div className="commentB">
        <img src={emoji} alt="emoji"></img>
        <input placeholder="Add a comment..."></input>
        <span>Post</span>
      </div>
    </div>
  );
};

export default CommentSection;
