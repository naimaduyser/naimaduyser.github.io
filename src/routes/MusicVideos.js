import React from "react";
import { Link } from "react-router-dom";

// Page Transition
import { motion } from 'framer-motion';

const MusicVideos = () => {
  return (
    <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="projects-container">
        <Link to="/whydoesitfeelsoright">
          <div className="whydoesitfeelsoright banner">
            <h2>Why Does It Feel So Right</h2>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default MusicVideos;
