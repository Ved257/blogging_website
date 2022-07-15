import React from "react";
import "./Start.css";
import Lottie from "react-lottie";

const Start = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/start.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div className="Start">
      <div className="start-container">
        <div className="row">
          <div className="col main_heading">
            <h1>Pick a Template</h1>
            <h3 style={{width:"500px"}}>Explore the various website template options to find the one that best represents your brand. Each template can be customized to fit your style of storytelling.</h3>
            <h3>
              {/* <a target="_blank">Browse Templates</a> */}
            </h3>
          </div>
          <div className="col image_2">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
