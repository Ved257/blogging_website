import React from "react";
import Lottie from "react-lottie";
import "./Login.css";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/login-and-sign-up.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="login">
      <div className="login container">
        <div className="row">
          <div className="col image">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
        <div className="row">
          <div className="col inputs">
            <h1 style={{ fontSize: "45px" }}>Login</h1>
            <form className="form-login">
              <input type="text" className="form-control" placeholder="Email" />
            </form>
            <form className="form-login">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </form>
            <br />
            <button className="btn_login">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
