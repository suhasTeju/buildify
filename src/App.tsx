import React from "react";
import logo from "./logo.png";
import "./App.css";
//@ts-ignore
import data from "./logo.json";
import Lottie from "react-lottie";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data, // Lottie animation JSON data
  };
  return (
    <div className="App">
      <div className="navBar">
        <div className="logoContainer">
          <img src={logo} className="logo" />
        </div>

        <div></div>
        <div className="service">
          <strong>About us</strong>
          <strong>Services</strong>
          <strong>Contact</strong>
          <strong>Careers</strong>
        </div>
      </div>
      <div className="hero">
        <Lottie options={defaultOptions} height="70vh" width="100%" />
        <div className="hero-text-container">
          <h1 className="main-text">
            Your partner for every technology solution
          </h1>
          <div>
            Transform ideas into{" "}
            <span className="type">
              <span>
                <span> a great product.</span>
                <span> a revenue generating modal.</span>
                <span> a great! business.</span>
              </span>
            </span>
          </div>
          <div className="action-container">
            <button className="button">
              Contact us
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
            <button className="button">
              Our Services
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
