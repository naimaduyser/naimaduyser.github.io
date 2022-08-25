import React from "react";
import { motion } from "framer-motion";

// Styling
import "../pages/about.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-container">
        <div className="about-text">
          <p>
            In 2018 I graduated from DBS Film School (now known as Catalyst:
            Institute of the Arts) in Berlin. Having been to film school
            solidified my infinite love for cinema and visual arts. I
            experimented in different fields of filmmaking so my work covers a
            diverse range of subjects, styles and genres. My main strengths are
            in directing, producing and editing.
          </p>
          <p>
            I am also a recent graduate of Le Wagon's 9 week intensive web
            development bootcamp, where I learned the foundations of web
            development, covering modules in HTML, CSS & JavaScript, Bootstrap,
            jQuery, SQL, Git & Version Control, Heroku, Ruby on Rails, AJAX and
            UX/UI Design. In March 2022, I started an internship in web
            development at AKQA Amsterdam, a digital design and communications
            agency founded in the UK. During my time here, I familiarised myself
            with different JavaScript frameworks, such as React and Next.js and
            quickly became involved assisting in several projects, including{" "}
            <a
              className="about-link"
              href="https://butterflywing.gallery"
              target="_blank"
              rel="noreferrer"
            >
              The Butterfly Wing Gallery
            </a>
            ,{" "}
            <a
              className="about-link"
              href="https://tractable.ai"
              target="_blank"
              rel="noreferrer"
            >
              Tractable
            </a>{" "}
            and{" "}
            <a
              className="about-link"
              href="https://saeco.com"
              target="_blank"
              rel="noreferrer"
            >
              Phillips Saeco
            </a>
            .
          </p>
          <p>
            Feel free to reach out to me about any projects you may need help
            with. You can see examples of my work by clicking on the links
            above. Happy browsing!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
