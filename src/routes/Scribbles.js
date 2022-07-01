import React from "react";

// Styling
import "../components/project.css";

// Media
import ScribblesPhoto from "../assets/media/project/scribbles-project.png";
import ScribblesPhoto2 from "../assets/media/project/scribbles-project-2.png";

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from "react-icons/bs";

const Scribbles = () => {
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
          <h4>David Scribbles: The Raptivist</h4>
          <h5>Documentary | Berlin, Germany | 2016</h5>
          <h5>DOP, Editor, Producer</h5>
        </div>
        <div className="project-media-2">
          <img
            src={ScribblesPhoto}
            alt="David Scribbles and Friends"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            David Scribbles was the very first project I collaborated on during
            my first year at film university. For this film, I was responsible
            for the production, cinematography and editing of the film. The
            crew, which consisted of myself on camera, a director and an
            assistant cinematographer had very little filmmaking experience
            prior to this project, so it was interesting to see what footage we
            were able to produce and what shooting styles were adopted. Although
            it was a challenging project due to us being inexperienced, having a
            tiny crew and also limited budget/equipment (just a Canon C100 and a
            Zoom recorder), it was at the same time very fun to shoot and we
            were happy with the results. It is also humbling looking back at the
            project and seeing how much progress I made in my filmmaking
            abilities in just a few years.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={ScribblesPhoto2}
            alt="The Band with David Scribbles"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            The main character of this documentary is a rapper and activist
            named David Scribbles. Originally from Swaziland, Scribbles was a
            character you would always see out and about in Berlin. From the
            moment I met Scribbles, I found him to be a very informed, spiritual
            and introspective individual. He had an incredible talent for
            writing poetry and rhymes, without the use of vulgarity or swearing
            to convey what he wanted to say. His music and rapping skills were
            for me on par with The Fugees and Digable Planets - hip hop that you
            can play to your kids.
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

export default Scribbles;
