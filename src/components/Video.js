import React from 'react'

// Styling
import "./video.css"

// Assets
import homepageVideo from "../assets/media/videos/homepage.mp4"
import homepageCoverMobile from "../assets/media/banner/malachi-cover.png"

const Video = () => {
  return (
    <>
        <video autoPlay loop muted id="video">
            <source src={homepageVideo} type="video/mp4" />
        </video>
        <img src={homepageCoverMobile} alt="Malachi Baseden on the saxophone" className="homepage-cover-mobile"></img>
    </>
  )
}

export default Video