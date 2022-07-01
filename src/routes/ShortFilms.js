import React from "react";
import { Link } from "react-router-dom";

// Navigation Page Transition
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const ShortFilms = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
       <button className="back-films" onClick={() => navigate(-1)}>
        <BsArrowLeft className="bs-left" />
      </button>
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
