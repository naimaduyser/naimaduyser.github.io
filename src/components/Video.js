import React from 'react'

// Styling
import "./video.css"

// Assets
import homepageVideo from "../assets/media/videos/homepage.mp4"

const Video = () => {
  return (
    <>
        <video autoPlay loop muted id="video">
            <source src={homepageVideo} type="video/mp4" />
        </video>
    </>
  )
}

export default Video