import React from "react";
import Lottie from "react-lottie";
import "./Transitions.css";
import cookie from "react-cookies";
import axios from "axios";


const Transitions = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require("../../assets/transition.json"),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:4000/user/logout");
            window.location.href = "/login";
        } catch (err) {
            console.log(err);
        }
    }


    const blogID = cookie.load("blogID");
    const email = cookie.load("email");

    const updateBlog =  () => {
        console.log(blogID);
        console.log(email);
        window.location.href = "/update";
    }

  return (
    <div className="transition-page">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        className="transition-container"
      />
      <div className="transition-text">
        <h1>Your blog has been successfully saved!!</h1>
        <div className="transition-buttons">
          <button className="update" onClick={updateBlog}>Update your blog</button>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
