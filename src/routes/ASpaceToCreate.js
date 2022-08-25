import React from "react";

// Media
import ASpaceToCreateCover2 from "../assets/media/project/space-to-create-project-2.png";

// Page Transition & Navigation
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icons
import { BsArrowLeft } from "react-icons/bs"

const ASpaceToCreate = () => {
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
          <h4>A Space To Create</h4>
          <h5>Web Series | Berlin, Germany | 2019 </h5>
          <h5>Cinematographer, Editor</h5>
        </div>
        <div className="project-media-2">
          <img
            src={ASpaceToCreateCover2}
            alt="Rowan Edwards and Friends"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            A Space To Create is a web series exploring the creative
            journeys and processes of several students and teachers. 
            This web-series was made for and in collaboration with Catalyst: Institute of the Arts in Berlin.
          </p>
        </div>
        <p>Click the links below to watch episodes of the web series:</p>
        <div className="webseries-links">
          <a
            href="https://www.youtube.com/watch?v=ECzuzTtH8Is&feature=emb_title"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <p>
              <strong>Rowan Edwards:</strong> Electronic Music Production &
              Performance Student
            </p>
          </a>
          <a
            href="https://vimeo.com/266512864"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <p>
              <strong>Philip Roeder</strong>: Electronic Music Producer & Tutor
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ASpaceToCreate;
