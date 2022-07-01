import React from "react";

// Styling
import "../components/project.css";

// Media
import ChiarascuroCover from "../assets/media/project/chiarascuro-project.png";

// Page Transition & Navigation
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from "react-icons/bs";

const Chiarascuro = () => {
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
          <h4>Chiarascuro</h4>
          <h5>Micro-Film | Berlin, Germany | 2018</h5>
          <h5>Director, DOP, Editor</h5>
        </div>
        <div className="project-media-2">
          <img
            src={ChiarascuroCover}
            alt="Ilias Merabiha in Chiarascuro"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            This minute-long microfilm follows a young man struggling to come to
            terms with his true identity. He is met by two women who laugh at
            him for expressing his feminine side.
          </p>
        </div>
        <a
          href="https://vimeo.com/192643848"
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

export default Chiarascuro;
