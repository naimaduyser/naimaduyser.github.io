import React from 'react';
import Video from '../components/Video';

// Page Transitions
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Video />
    </motion.div>
  )
}

export default Home