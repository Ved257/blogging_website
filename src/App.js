import React from "react";
import Landing from "./pages/Landing";
import Start from "./pages/Start/Start";
import Navbar from "./components/Navbar";
import Landing_3 from "./pages/Landing_3/Landing_3";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Landing />
      <Start />
      <Landing_3 />
      <Footer/>
    </div>
  );
}

export default App;
