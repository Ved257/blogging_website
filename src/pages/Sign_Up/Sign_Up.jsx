import React from "react";
import Lottie from "react-lottie";
import "./Sign_Up.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const Sign_Up = () => {
  var name_ref = useRef();
  var email_ref = useRef();
  var password_ref = useRef();
  var confirm_password_ref = useRef();
  const [error, setError] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/login-and-sign-up.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async () => {
    try {
      const name = name_ref.current.value;
      const email = email_ref.current.value;
      const password = password_ref.current.value;
      const confirm_password = confirm_password_ref.current.value;
      if (password !== confirm_password) {
        setError("Passwords do not match");
      } else {
        const res = await axios.post("http://localhost:4000/user/signup", {
          name,
          email,
          password,
        });
        if (res.data.error) {
          setError(res.data.error);
        } else {
          window.location.href = "/write";
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign_up">
      <div className="signup container">
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
            <h1 style={{ fontSize: "45px" }}>Sign up</h1>
            <form className="form-signup">
              <input
                ref={name_ref}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </form>
            <form className="form-signup">
              <input
                ref={email_ref}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </form>
            <form className="form-signup">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={password_ref}
              />
            </form>
            <form className="form-signup">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                ref={confirm_password_ref}
              />
            </form>
            <br />
            <button
              className="btn_sign_up"
              onClick={() => {
                console.log(name_ref.current.value);
                console.log(email_ref.current.value);
                console.log(password_ref.current.value);
                console.log(confirm_password_ref.current.value);
                handleSubmit();
              }}
            >
              Sign up
            </button>
            <br />
            <div>
              Already have an account?
              <Link to="/login">
                <div style={{ color: "blue" }}>Login</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
