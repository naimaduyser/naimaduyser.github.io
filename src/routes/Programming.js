import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../pages/programming.css";
import "../components/banner.css";

// Page Transition
import { motion } from 'framer-motion'

const Programming = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="projects-container">
        <Link to="/butterfly">
          <div className="butterfly banner">
            <h2>The Butterfly Wing Gallery</h2>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Programming;
