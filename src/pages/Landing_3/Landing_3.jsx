import React from "react";
import "./Landing_3.css";
import Lottie from "react-lottie";

const Landing_3 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/landing3.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="L3">
      <div className="L3_container">
        <div className="row">
          <div className="col L3_heading">
            <h1>How to write a Good Blog</h1>
            <h3>
            The first step towards writing a blog post is to pick a good topic. You'll need to find out what your followers want to know and read about, so your post will continue to get traffic after it’s published.
            </h3>
          </div>
          <div className="col L3_image">
            <Lottie options={defaultOptions} height={450} width={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_3;
