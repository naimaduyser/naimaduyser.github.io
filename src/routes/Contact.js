import React from "react";

// Styling
import "../components/contact.css";

// Media
import ContactImage from "../assets/media/other/contact-image.png"

// Page Transition
import { motion } from "framer-motion";

// Social Media Icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-container"
    >
      <img src={ContactImage} alt="Imoto" className="contact-image"></img>
        <p>Reach me at naima.fatimaduyser@gmail.com</p>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/naimaduyser/" target="_blank" rel="noreferrer"><BsLinkedin className="linkedin"/></a>
        <a href="https://github.com/naimaduyser" target="_blank" rel="noreferrer"><BsGithub className="github"/></a>
      </div>
    </motion.div>
  );
};

export default Contact;
