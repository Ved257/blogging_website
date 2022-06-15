/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Landing_Main from "./pages/Landing_Main";
import Sign_Up from "./pages/Sign_Up/Sign_Up";
import Login from "./pages/Login/Login";
import Write from "./pages/Write/Write";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing_Main/>} />
          <Route path="/signup" element={<Sign_Up/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/write" element={<Write/>} />
        </Routes>
      </Router>
      {/* <Landing_Main /> */}
      {/* <Sign_Up /> */}
    </div>
  );
}

export default App;
