// src/pages/Home.js
import React from "react";
import Typical from 'react-typical';
import "./home.css";
import profileImage from "../assets/simpy_photo_small.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
      <h2>👋 HI THERE I'M</h2>
      <h1>Simpy Kumari Nonia</h1>
        <h3>
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              'I build things for Web 💻', 2000,
              'I love designing 🎨', 2000,
              'I solve problems 🧠', 2000
            ]}
          />
        </h3>
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
