import React from "react";

// Styling
import "../components/project.css";

// Media
import MalachiCover from "../assets/media/project/malachi-project.png";
import MalachiCover2 from "../assets/media/project/malachi-project-2.png";
import MalachiCover3 from "../assets/media/project/malachi-project-3.png";

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from "react-icons/bs";

const Malachi = () => {
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
          <h4>MALACHI</h4>
          <h4>(mal-uh-kai)</h4>
          <h5>Documentary | Berlin, Germany | 2018</h5>
          <h5>Director, DOP, Editor, Producer</h5>
        </div>
        <div className="project-media-2">
          <img
            src={MalachiCover}
            alt="Malachi Basden in JustMusic"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            Malachi was my submission for my final year assessment at film
            university. Our task was to produce, direct and shoot a documentary
            of any length and of any subject of our choosing. I knew from the
            moment we received the specifications for our assignment that I
            wanted to combine my love of guerilla filmmaking with my love for
            music. Guerilla filmmaking is defined as a shooting style that is
            done stealthily with minimal film permits, little to no props and a
            bare-minimum crew. It was a style of filmmaking that I had really
            come to enjoy as a result of being in a small class of students with
            a usually limited number of available crew members. It allowed me to
            take my camera and really place myself into the perspective of my
            real-life characters while maintaining a low profile and saving on
            costs, resulting in being able to obtain footage that was raw,
            genuine and heartfelt.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={MalachiCover2}
            alt="Gabeyre Farah on the trumpet"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            This documentary follows several days through the eyes of Malachi: a
            jazz saxophonist hailed from New York but now based as a street
            musician in Berlin. I had met Malachi a few months prior to filming
            and found him to be an incredible character. He was eccentric and
            theatrical and made friends wherever he went. He needed very little
            direction and was from the beginning comfortable expressing himself
            on camera. I often likened him to the Pied Piper of Berlin. On top
            of that, he is a beyond talented musician, having trained with the
            likes of Wynton and Brandon Marsalis.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={MalachiCover3}
            alt="Malachi Basden in Rosenthaler Platz"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            This documentary was awarded Best Film & Best Documentary of 2018 at
            the DBS Film Awards{" "}
            <em>
              (now Catalyst - Institute for Creative Arts and Technology).
            </em>
          </p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=Kajo7amPjMg"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <p>Watch the documentary</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Malachi;
