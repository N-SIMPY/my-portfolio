// src/pages/About.js
import React from 'react';
import './About.css';
import RituImage from '../assets/Ritu.jpg.jpeg'; // Make sure the image is placed correctly

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          Hi, I’m Simpy Kumari Nonia, a passionate Software Developer with a strong focus on building scalable, user-friendly, and accessible web applications. With a B.Tech in Information Technology and a year-long apprenticeship at Indian Oil Corporation, I’ve designed and implemented systems that serve thousands of users daily—improving performance, usability, and maintainability across the board.

My technical stack includes Java, Python, C++, TypeScript, and frameworks like Spring Boot, Django, Angular, and React. I'm especially passionate about accessibility-focused design, distributed systems, and responsive interfaces. I’ve led cross-functional teams, mentored junior developers, and continuously work toward clean, efficient, and impactful solutions.

Whether it's creating a Capital Expenditure Portal that boosted workflow efficiency by 35%, or developing a lab management system optimized for performance and accessibility, I thrive on solving complex problems with elegant code and thoughtful design.
          </p>

          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <a href="https://davnimcha.org/" target="_blank" rel="noreferrer">
                10th - DAV Public School
              </a>
            </li>
            <li>
              <a href="http://vikasvidyaniketan.com/" target="_blank" rel="noreferrer">
                12th - Vikas Vidyaniketan
              </a>
            </li>
            <li>
              <a href="http://www.aecwb.edu.in/" target="_blank" rel="noreferrer">
                Graduation - Asansol Engineering College
              </a>
            </li>
          </ul>
        </div>

        <div className="about-image">
          <img src={RituImage} alt="Simpy" />
        </div>
      </div>
    </div>
  );
};

export default About;
