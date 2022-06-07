import React from 'react'
import { Link } from "react-router-dom"

// Page Transition
import { motion } from "framer-motion"

const Commercials = () => {

    return (
      <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className="projects-container">
          <Link to="/my-one-thing">
            <div className="my-one-thing banner">
              <h2>My One Thing</h2>
            </div>
          </Link>
          <Link to="/a-space-to-create">
            <div className="space-to-create banner">
              <h2>A Space To Create</h2>
            </div>
          </Link>
        </div>
      </motion.div>
    );
  };
  
  export default Commercials;
  