import React from "react";
import { Link } from "react-router-dom";

// Page Transition
import { motion } from 'framer-motion'

const ShortFilms = () => {
  return (
    <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="projects-container">
        <Link to="/imoto">
          <div className="imoto banner">
            <h2>IMOTO</h2>
          </div>
        </Link>
        <Link to="/chiarascuro">
          <div className="chiarascuro banner">
            <h2>Chiarascuro</h2>
          </div>
        </Link>
        <Link to="/voyage-nocturne">
          <div className="voyage-nocturne banner">
            <h2>Voyage Nocturne</h2>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ShortFilms;
