import React from "react";

// Styling
import '../components/project.css';

// Media
import VoyageNocturneCover from "../assets/media/project/voyage-nocturne-project.png"

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const VoyageNocturne = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="project-container-2">
        <div className="project-details">
          <h4>Voyage Nocturne</h4>
          <h5>Short Film | Berlin, Germany | 2019</h5>
          <h5>Cinematographer</h5>
        </div>
        <div className="project-media-2">
          <img src={VoyageNocturneCover} alt="Voyage Nocturne" className="project-image" />
        </div>
        <div className="project-paragraph">
          <p>Voyage Nocturne, directed by female Moroccan filmmaker Ines Asmami, is a film about a young man dealing with his duality between his cultural religious values and his passion for the drag queen show.</p>
        </div>
        <a
          href="https://vimeo.com/356364682"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <p>Watch the film</p>
        </a>
      </div>
    </motion.div>
  );
};

export default VoyageNocturne;
