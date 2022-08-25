import React from "react";

// Styling
import "../components/project.css";

// Media
import ButterflyVideo from "../assets/media/videos/wings_loop.mp4";

// Page Transition & Navigation
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const Butterfly = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        <BsArrowLeft className="bs-left" />
      </button>
      <div className="project-container-2">
        <div className="project-details">
          <h4>The Butterfly Wing Gallery</h4>
          <h5>Front-End Developer | Amsterdam, Netherlands</h5>
        </div>
        <div className="project-media-2">
          <div className="butterfly-container">
            <video
              className="butterfly-video"
              src={ButterflyVideo}
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="project-paragraph">
          <p>
            The Butterfly Wing is the world's first online interactive gallery
            dedicated to showcasing art, writing and media made by people living
            with lupus. I was asked to build several pages of the website
            following a style guide given by a design team.
          </p>
        </div>
        <a
          className="project-link"
          href="https://butterflywing.gallery"
          rel="noreferrer"
          target="_blank"
        >
          <p>Click to view the gallery</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Butterfly;
