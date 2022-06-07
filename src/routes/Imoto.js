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

const Imoto = () => {
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
          <h4>IMOTO</h4>
          <h5>Short Film | Berlin, Germany | 2019</h5>
          <h5>Director, Producer, Editor, Sound Design</h5>
        </div>
        <div className="project-media-2">
          <img src={ImotoCover} alt="Imoto" className="project-image" />
        </div>
        <div className="project-paragraph">
          <p>
            Imoto was filmed during the winter of 2018-2019 as part of my final
            thesis project. This was the first project in which I had complete
            creative freedom, with zero limitations on what I had to film. The
            project took two months to complete and was definitely the most
            demanding project I’ve taken part in. It was my first time directing
            a short film that was longer than a few minutes as I was used to
            shooting documentaries before. When shooting a documentary, you have
            the opportunity and ability to be somewhat spontaneous and not
            really go into the day knowing what shots you would manage to
            capture. Thereby you are also able to work with a smaller crew. With
            this film, it was important that everything was meticulously
            planned, including the script, shot list, lighting, sound, framing,
            directing actors, negotiating locations and rehearsals. I also was
            lucky enough to have a larger crew for this project.
          </p>
        </div>
        <div className="project-media-2">
          <img src={ImotoCover2} alt="Imoto" className="project-image" />
        </div>
        <div className="project-paragraph">
          <p>
            During this time I was heavily inspired by the works of Takeshi
            Kitano and Wong-Kar Wai. I loved the films of Takeshi Kitano because
            of the way he wrote his characters. They could range from a hardened
            yakuza thug to a quirky, innocent kid but they all shared humorous,
            relatable and wholesome qualities that made you very attached to
            them. With the Wong-Kar Wai films, I loved how the plot tended to
            follow a day in the life of several characters and this was
            something I wanted to replicate in my script. The cinematography of
            Christopher Doyle paired with the backdrop of a neon-lit, bustling
            East Asian city, there was something completely magnetic about his
            movies. I wanted to pay homage to these two great directors and
            decided to use the creative aspects of both in my thesis film.
          </p>
        </div>
        <div className="project-media-2">
          <img src={ImotoCover3} alt="Imoto" className="project-image" />
        </div>
        <div className="project-paragraph">
          <p>
            The story follows Riku and Mai, two siblings from Japan, learn that
            their older brother has been killed back in their hometown. An old
            family friend travels to a bustling Berlin to warn them about the
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
