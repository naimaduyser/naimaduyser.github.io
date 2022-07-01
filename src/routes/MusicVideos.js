import React from "react";
import { Link } from "react-router-dom";

// Navigation & Page Transition
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const MusicVideos = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-films" onClick={() => navigate(-1)}>
        <BsArrowLeft className="bs-left" />
      </button>
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
