import React from "react";
import Lottie from "react-lottie";
import "./Sign_Up.css";

const Sign_Up = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/login-and-sign-up.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="sign_up">
      <div className="signup container">
        <div className="row">
          <div className="col image">
            <Lottie
              options={defaultOptions}
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="row">
          <div className="col inputs">
            <h1 style={{fontSize:"45px"}}>Sign up</h1>
            <form className="form-signup">
              <input type="text" className="form-control" placeholder="Name" />
            </form>
            <form className="form-signup">
              <input type="text" className="form-control" placeholder="Email" />
            </form>
            <form className="form-signup">
              <input type="text" className="form-control" placeholder="Password" />
            </form>
            <form className="form-signup">
              <input type="text" className="form-control" placeholder="Confirm Password" />
            </form>
            <br/>
            <button className="btn_sign_up">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
