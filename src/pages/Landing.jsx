import React from "react";
import "./Landing.css";
import Lottie from "react-lottie";

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/landing1.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="Landing">
      <div className="landing-container">
        <div className="row">
          <div className="col image_1">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="col title">
            <h1>Blogging Website</h1>
            <button className="get_started" onClick={()=>{
              window.location.href = "/start"
            }}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
