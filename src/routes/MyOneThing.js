import React from "react";

// Styling
import "../components/project.css";

// Media
import MyOneThingCover from "../assets/media/project/my-one-thing-project.png";

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from 'react-icons/bs'

const MyOneThing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        <BsArrowLeft className="bs-left"/>
      </button>

      <div className="project-container-2">
        <div className="project-details">
          <h4>My One Thing</h4>
          <h5>Web Series | Berlin, Germany | 2019</h5>
          <h5>Cinematographer, Editor</h5>
        </div>
        <div className="project-media-2">
          <img
            src={MyOneThingCover}
            alt="Cadenza Zhao in My One Thing"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            My One Thing is a web series of short stories about the single tool
            that is essential to the creative process of the artist.
          </p>
          <p>
            This episode features filmmaker and talented musician Cadenza Zhao.
            The young filmmaker is originally from Switzerland and grew up in a
            very musical family but her passion for visual storytelling brought
            her to Berlin.
          </p>
          <p>
            This web-series was made for and in collaboration with Catalyst:
            Institute of the Arts in Berlin.
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
              <strong>Cadenza Zhao: </strong>Filmmaking Student
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=qNa98ZYMb2Q"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <p>
              <strong>Pietro Spinelli</strong>: Electronic Music Production Student & Pianist
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=jz9fVT3CS1I"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <p>
              <strong>Kevin Davies</strong>: Electronic Music Production Tutor & Techno Producer
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MyOneThing;
