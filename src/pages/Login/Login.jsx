import React from "react";
import Lottie from "react-lottie";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import cookie from "react-cookies";



const Login = () => {
  var email_ref = useRef();
  var password_ref = useRef();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const email = email_ref.current.value;
      const password = password_ref.current.value;
      const res = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      cookie.save("email", res.data.email);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/write";
      }
    } catch (err) {
      console.log(err.response.message);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/login_.json"),
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
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
            <h1 style={{ fontSize: "45px" }}>Login</h1>
            <form className="form-login">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                ref={email_ref}
              />
            </form>
            <form className="form-login">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={password_ref}
              />
            </form>
            <br />
            <button
              className="btn_login"
              onClick={() => {
                handleSubmit();
                console.log(email_ref.current.value);
                console.log(password_ref.current.value);
              }}
            >
              Login
            </button>
            <br />
            <div>
              Don't have an account?
              <Link to="/signup">
                <div style={{ color: "blue" }}>Sign Up</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
