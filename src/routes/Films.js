import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../components/banner.css";
import "../pages/films.css";

// Page Transitions
import { motion } from "framer-motion";

const Films = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/documentaries">
        <div className="documentaries banner">
          <h2>Documentaries</h2>
        </div>
      </Link>
      <Link to="/music-videos">
        <div className="music-videos banner">
          <h2>Music Videos</h2>
        </div>
      </Link>
      <Link to="/short-films">
        <div className="short-films banner">
          <h2>Short Films</h2>
        </div>
      </Link>
      <Link to="/commercials">
        <div className="webseries banner">
          <h2>Web Series</h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default Films;
