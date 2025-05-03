// src/pages/About.js
import React from 'react';
import './About.css';
import { FaSchool, FaUniversity } from 'react-icons/fa';


const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="about-intro">
        
        <p>
          Hi, I’m Simpy Kumari Nonia, a passionate Software Developer with a strong focus on building scalable, user-friendly, and accessible web applications. With a B.Tech in Information Technology and a year-long apprenticeship at Indian Oil Corporation, I’ve designed and implemented systems that serve thousands of users daily—improving performance, usability, and maintainability across the board.

My technical stack includes Java, Python, C++, TypeScript, and frameworks like Spring Boot, Django, Angular, and React. I'm especially passionate about accessibility-focused design, distributed systems, and responsive interfaces. I’ve led cross-functional teams, mentored junior developers, and continuously work toward clean, efficient, and impactful solutions.

Whether it's creating a Capital Expenditure Portal that boosted workflow efficiency by 35%, or developing a lab management system optimized for performance and accessibility, I thrive on solving complex problems with elegant code and thoughtful design.
          </p>
      </div>

      <h2>Education Timeline</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><FaSchool /></div>
          <div className="timeline-content">
            <h3>2018 – 10th Standard</h3>
            <a href="https://davnimcha.org/" target="_blank" rel="noreferrer">DAV Public School</a>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaSchool /></div>
          <div className="timeline-content">
            <h3>2020 – 12th Standard</h3>
            <a href="http://vikasvidyaniketan.com/" target="_blank" rel="noreferrer">Vikas Vidyaniketan</a>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaUniversity /></div>
          <div className="timeline-content">
            <h3>2024 – Graduation</h3>
            <a href="http://www.aecwb.edu.in/" target="_blank" rel="noreferrer">Asansol Engineering College</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
