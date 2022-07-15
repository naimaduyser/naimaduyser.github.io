import React from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'

// Routes
import Home from "../routes/Home"
import About from "../routes/About"
import Films from "../routes/Films"
import Programming from "../routes/Programming"
import Contact from "../routes/Contact"
import Butterfly from "../routes/Butterfly"
import Documentaries from "../routes/Documentaries"
import MusicVideos from "../routes/MusicVideos"
import WebSeries from "../routes/WebSeries"
import ShortFilms from "../routes/ShortFilms"
import Malachi from "../routes/Malachi"
import Scribbles from "../routes/Scribbles"
import WhyDoesItFeelSoRight from "../routes/WhyDoesItFeelSoRight"
import Imoto from "../routes/Imoto"
import Chiarascuro from "../routes/Chiarascuro"
import VoyageNocturne from "../routes/VoyageNocturne"
import MyOneThing from "../routes/MyOneThing"
import ASpaceToCreate from "../routes/ASpaceToCreate"

// Framer Motion
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home /> } />
                <Route path="/#/about" element={<About /> } />
                <Route path="/films" element={<Films /> } />
                <Route path="/programming" element={<Programming /> } />
                <Route path="/contact" element={<Contact /> } />
                <Route path="/documentaries" element={<Documentaries /> } />
                <Route path="/music-videos" element={<MusicVideos /> } />
                <Route path="/webseries" element={<WebSeries /> } />
                <Route path="/short-films" element={<ShortFilms /> } />
                <Route path="/butterfly" element={<Butterfly /> } />
                <Route path="/malachi" element={<Malachi /> } />
                <Route path="/scribbles" element={<Scribbles /> } />
                <Route path="/whydoesitfeelsoright" element={<WhyDoesItFeelSoRight /> } />
                <Route path="/imoto" element={<Imoto /> } />
                <Route path="/chiarascuro" element={<Chiarascuro /> } />
                <Route path="/voyage-nocturne" element={<VoyageNocturne /> } />
                <Route path="/my-one-thing" element={<MyOneThing /> } />
                <Route path="/a-space-to-create" element={<ASpaceToCreate /> } />
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes