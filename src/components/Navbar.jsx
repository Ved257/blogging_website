import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //Change background color of navbar when scrolling
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: scrolled ? "#252951" : "transparent",
        color: scrolled ? "white" : "black",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div className="navbar_logo">Blogging Website</div>
      <div className="navbar_links">
        <Link to="/">
          <div style={{ padding: "15px" }}>Home</div>
        </Link>
        <Link to="/about">
          <div style={{ padding: "15px" }}>About</div>
        </Link>
        <Link to="/login">
          <div style={{ padding: "15px" }}>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
