import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="page"
    >
      <h2>Contact Me</h2>
      <p><FaEnvelope /> Email: simpy@example.com</p>
    </motion.div>
  );
}

export default Contact;
