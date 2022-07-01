import React from "react";
import { Link } from "react-router-dom";

// Navigation & Page Transition
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const Documentaries = () => {
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
        <Link to="/malachi">
          <div className="malachi banner">
            <h2>MALACHI</h2>
            <h3>(mal-uh-kai)</h3>
          </div>
        </Link>
        <Link to="/scribbles">
          <div className="scribbles banner">
            <h2>David Scribbles</h2>
            <h3>The Raptivist</h3>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Documentaries;
