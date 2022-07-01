import React from "react";

// Styling
import "../components/project.css";

// Media
import SofiePhoto from "../assets/media/project/sofie-project-cover.png";

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const WhyDoesItFeelSoRight = () => {
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
          <h4>Why Does It Feel So Right?</h4>
          <h5>Music Video | Berlin, Germany | 2016</h5>
          <h5>Colourist, Production Designer</h5>
        </div>
        <div className="project-media-2">
          <img src={SofiePhoto} alt="Sofie Soe" className="project-image" />
        </div>
        <div className="project-image">
          <p>
            Why Does It Feel So Right is a music video filmed for Berlin-based
            Danish singer Sofie Soe. This music video was made in my first year
            at film university and I was resposible for the production design
            and post-production color grading.
          </p>
        </div>
        <a
          href="https://vimeo.com/185930810"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <p>Watch the music video</p>
        </a>
      </div>
    </motion.div>
  );
};

export default WhyDoesItFeelSoRight;
