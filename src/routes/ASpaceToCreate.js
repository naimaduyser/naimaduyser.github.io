import React from "react";

// Media
import ASpaceToCreateCover from "../assets/media/project/space-to-create-project.png";
import ASpaceToCreateCover2 from "../assets/media/project/space-to-create-project-2.png";
import ASpaceToCreateCover3 from "../assets/media/project/space-to-create-project-3.png";

// Page Transition & Navigation
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ASpaceToCreate = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="project-container-2">
        <div className="project-details">
          <h4>A Space To Create</h4>
          <h5>Web Series | Berlin, Germany | 2019 </h5>
          <h5>Cinematographer, Editor</h5>
        </div>
        <div className="project-media-2">
          <img
            src={ASpaceToCreateCover}
            alt="A Space to Create"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            A Space To Create is a multiple part web series exploring the
            creative journeys and processes of several students and teachers
            associated with Catalyst: Institute of the Arts (formerly DBS
            Berlin). I was hired as a cinematographer and editor by the
            university to create this series in conjunction with an executive
            producer and a director.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={ASpaceToCreateCover2}
            alt="A Space to Create"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            The episodes for this web series were filmed with just a crew of
            two: myself and the director. For every episode, we wanted to show
            the audience the perspective of the artist so we utilized guerilla
            style-filmmaking. With only a camera, a few lenses and a clapper
            board for our equipment, we followed the artists through the streets
            of Berlin as they carried on with their daily tasks, taking us along
            the journey.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={ASpaceToCreateCover3}
            alt="A Space to Create"
            className="project-image"
          />
        </div>
          <p>Click the links below to watch episodes of the web series:</p>
          <div className="webseries-links">
          <a href="https://www.youtube.com/watch?v=ECzuzTtH8Is&feature=emb_title" target="_blank" rel="noreferrer" className="project-link"><p><strong>Rowan Edwards:</strong> Electronic Music Production & Performance Student</p></a>
          <a href="https://vimeo.com/266512864" target="_blank" rel="noreferrer" className="project-link"><p><strong>Philip Roeder</strong>: Electronic Music Producer & Tutor</p></a>
          </div>
      </div>
    </motion.div>
  );
};

export default ASpaceToCreate;
