import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="page"
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
      </div>
    </motion.div>
  );
}

export default Projects;
