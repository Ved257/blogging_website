/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Landing from "./Landing";
import Start from "./Start/Start";
import Navbar from "../components/Navbar";
import Landing_3 from "./Landing_3/Landing_3";
import Footer from "../components/Footer/Footer";

const Landing_Main = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Start />
      <Landing_3 />
      <Footer />
    </div>
  );
};

export default Landing_Main;
