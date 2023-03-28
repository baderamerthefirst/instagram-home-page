import React, { useState, useEffect } from "react";
import arrow from "../../../assets/arrow.png";

const MediaSlider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slideoffset, setslideoffset] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1200) {
      setslideoffset(parseInt((43 * screenWidth) / 100) + 0.6);
    } else if (screenWidth < 800) {
      setslideoffset(parseInt((96 * screenWidth) / 100) + 0.87);
    } else if (screenWidth < 1200) {
      setslideoffset(parseInt((64 * screenWidth) / 100) - 68.87);
    }
  }, [screenWidth]);
  var cardStyle = {
    display: "flex",
    flexDirection: "row",
    transform: `translateX(${slideIndex * -slideoffset}px)`,
    transition: `transform 0.5s ease-in-out`,
  };

  const Slide = (props) => {
    
    return (
      <div className="each-slide">
        {props.imageUrl != null && <img src={props.imageUrl}></img>}
        {props.videoUrl != null && 
        <video controls >
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        }
      </div>
    );
  };

  const handleNextSlide = () => {
    if (slideIndex < props.URLS.length + props.videoURLS.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      //setSlideIndex(0);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      //setSlideIndex(URLS.length + props.videoURLS.length- 1);
    }
  };

  return (
    <div className="MediaSlider">
      <div className="SlidesContainer">
        <div style={cardStyle}>
          {props.URLS.map((imageUrl, index) => (
            <Slide key={index} imageUrl={imageUrl} />
          ))}
          {props.videoURLS.map((videoUrl) => (
            <Slide videoUrl={videoUrl} />
          ))}
        </div>
      </div>
      <img
        onClick={handleNextSlide}
        className="rightarrow"
        src={arrow}
        alt="next slide"
      />
      <img
        onClick={handlePrevSlide}
        className="leftarrow"
        src={arrow}
        alt="previous slide"
      />
    </div>
  );
};

export default MediaSlider;
