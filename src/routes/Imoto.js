import React from "react";

// Styling
import "../components/project.css";

// Media
import ImotoCover from "../assets/media/project/imoto-project.png";
import ImotoCover2 from "../assets/media/project/imoto-project-2.png";
import ImotoCover3 from "../assets/media/project/imoto-project-3.png";

// Navigation & Page Transition
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BsArrowLeft } from "react-icons/bs";

const Imoto = () => {
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
          <h4>IMOTO</h4>
          <h5>Short Film | Berlin, Germany | 2019</h5>
          <h5>Director, Producer, Editor, Sound Design</h5>
        </div>
        <div className="project-media-2">
          <img
            src={ImotoCover}
            alt="Mai and Riku at Warschauer Strasse Bridge"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            Imoto was my final thesis project in university and was filmed
            during the winter of 2018-2019. It was the first film project in
            which I had complete creative freedom, with zero limitations on the
            genre, length and style. The project took two months to complete and
            was definitely the most demanding project of mine to date. Prior to this project, I had spent a lot of time shooting documentaries, which allowed me a lot of room for spontaneous shooting. IMOTO
            took me completely out of my comfort zone as every aspect of the film had to be
            meticulously planned, including the script, shot list, lighting,
            sound, framing, directing actors, negotiating locations and
            rehearsals.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={ImotoCover2}
            alt="Eddie and Riku in a diner"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            During the time of shooting I was heavily inspired by the works of Takeshi
            Kitano and Wong-Kar Wai. I loved the films of Takeshi Kitano because
            of the way his characters were written and developed. They could range from a hardened
            yakuza thug to a quirky, innocent kid but they all shared humorous,
            relatable and wholesome qualities that made you very attached to
            them. With the Wong-Kar Wai films, I really enjoyed how the plot always seemed to
            follow a day in the life of several characters and this was
            something I wanted to replicate in my script. Combined with the cinematography of
            Christopher Doyle paired with the backdrop of a neon-lit, bustling
            East Asian city, I was completely hypnotised when watching his movies. I wanted to pay homage to these two great directors and
            decided to use inspiration from both in my thesis film.
          </p>
        </div>
        <div className="project-media-2">
          <img
            src={ImotoCover3}
            alt="Riku in Ostbahnhof"
            className="project-image"
          />
        </div>
        <div className="project-paragraph">
          <p>
            The story follows Riku and Mai, two siblings from Japan, as they learn that
            their older brother has been brutally murdered back in their hometown. An old
            family friend travels to Berlin to warn them about the
            imminent danger coming their way. 
          </p>
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

export default Imoto;
