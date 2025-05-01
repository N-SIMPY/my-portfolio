// src/pages/Home.js
import React from "react";
import "./home.css";
import profileImage from "../assets/simpy_photo_small.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h2>HI THERE I'M</h2>
        <h1>Simpy Kumari Nonia</h1>
        <h3>I build things for Web <span>(Software Developer)</span></h3>
        <p>
          I'm a web developer with strong experience in building responsive and beautiful websites.
        </p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="image-section">
        <div className="glow-circle">
          <img src={profileImage} alt="Simpy" />
        </div>
      </div>
    </div>
  );
};

export default Home;
