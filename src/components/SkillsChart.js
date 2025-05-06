// src/components/SkillsChart.js
import React from 'react';
import './SkillsChart.css';

const SkillsChart = () => {
  return (
    <div className="skills-chart-container">
      <h2>Software Developer</h2>
      <div className="skills-columns">
        <div className="column">
          <h3 className="client-title">Client Side</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
          <div className="role">Front-end Developer</div>
        </div>

        <div className="column">
          <h3 className="server-title">Server Side</h3>
          <ul>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
          <div className="role">Back-end Developer</div>
        </div>

        <div className="column">
          <h3 className="db-title">Database</h3>
          <ul>
            <li>MySQL</li>
            <li>PlSQL</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default SkillsChart;
