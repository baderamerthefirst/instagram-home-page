import React from "react";
import CommentSection from "./CommentSection";
import MediaSlider from "./MediaSlider";
import "./Post.css";
import PostProfile from "./PostProfile";

const Post = (props) => {
  const  rand=()=>{ return Math.floor(Math.random() * (1000 ));}


  const URLS = [
    
    "https://source.unsplash.com/random/600x800?sig="+rand(),
    "https://source.unsplash.com/random/600x800?sig="+rand(),
    "https://source.unsplash.com/random/600x800?sig="+rand(),
  ];
  const videoURLS=[
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    

  ];
  return (
    <div className="Post">
      <PostProfile PostProfileImg={props.PostProfileImg} PostProfileName={props.PostProfileName}/>
      <MediaSlider URLS={URLS} videoURLS={videoURLS} />
      <CommentSection />
    </div>
  );
};

export default Post;
