import React, { useState, useRef, useEffect } from "react";
import "./musicplayer.css";

// Buttons
import { BsFillSkipBackwardFill } from "react-icons/bs/";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

// Tracks
import Soul from "../assets/music/Terry Burrus - Share My Dreams.mp3";
import Reggae from "../assets/music/General Smiley - It's A Good Day.mp3";
import Lounge from "../assets/music/Thievery Corporation - Manhã.mp3";
import Jazz from "../assets/music/Ben Tankard - All Keyed Up.mp3";
import World from "../assets/music/Harry Roesli Gang - Curah Hujan.mp3";

const MusicPlayer = () => {
  // State
  const [songs] = useState([
    {
      title: "Terry Burrus - Share My Dreams",
      src: Soul,
      genre: "Soul",
    },
    {
      title: "General Smiley - It's A Good Day",
      src: Reggae,
      genre: "Reggae",
    },
    {
      title: "Thievery Corporation - Manhã",
      src: Lounge,
      genre: "Lounge",
    },
    {
      title: "Ben Tankard - All Keyed Up",
      src: Jazz,
      genre: "Jazz",
    },
    {
      title: "Harry Roesli Gang - Curah Hujan",
      src: World,
      genre: "World",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // References
  const audioPlayer = useRef(); // reference for our audio component
  const progressBar = useRef(); // reference for progress bar
  const animationRef = useRef(); // reference for animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadeddata,
    audioPlayer?.current?.readyState,
    currentSongIndex,
  ]);

  // Calculate Length of Song
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Change Play/Pause Btton
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  // Change Start Over Track Btton
  const handleStartOverTrack = () => {
    progressBar.current.value = Number(0);
    changeRange();
  };

  // Change Previous Track Btton
  const handlePreviousTrack = () => {
    currentSongIndex === 0
      ? setCurrentSongIndex(4)
      : setCurrentSongIndex((prev) => prev - 1);
    setTimeout(() => {
      setCurrentTime(0);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      setIsPlaying(true);
    }, 0);
  };

  // Change Next Track Btton
  const nextTrack = () => {
    currentSongIndex === 4
      ? setCurrentSongIndex(0)
      : setCurrentSongIndex((prev) => prev + 1);
    setTimeout(() => {
      setCurrentTime(0);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      setIsPlaying(true);
    }, 0);
  };

  // Change Genre Track Btton
  const handleGenreSelection = ({ target }) => {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].genre.toUpperCase() === target.outerText) {
        setCurrentSongIndex(i);
      }
    }
    setTimeout(() => {
      setCurrentTime(0);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      setIsPlaying(true);
    }, 0);
  };

  return (
    <div className="music-container">
      {/* Audio Source */}
      <audio
        ref={audioPlayer}
        src={songs[currentSongIndex].src}
        id="audio"
        preload="metadata"
        autoPlay
      ></audio>

      {/* Music Player Buttons */}
      <div className="player-buttons">
        <button
          className="arrows"
          onClick={handleStartOverTrack}
          onDoubleClick={handlePreviousTrack}
        >
          <BsFillSkipBackwardFill style={{ color: "white" }} />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <BsFillPauseFill style={{ color: "white" }} />
          ) : (
            <BsFillPlayFill style={{ color: "white" }} />
          )}
        </button>
        <button className="arrows" onClick={nextTrack}>
          <BsFillSkipForwardFill style={{ color: "white" }} />
        </button>
      </div>

      {/* Song Title */}
      <div className="song-title" id="title">
        {songs[currentSongIndex].title}
      </div>

      <div className="player-slider">
        {/* Current Time */}
        <div className="current-time">{calculateTime(currentTime)}</div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <input
            type="range"
            className="progress-bar-slider"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* Duration */}
        <div className="duration">
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>

      {/* Genre Buttons */}
      <div className="music-genres">
        <button
          className={
            currentSongIndex === 0
              ? "genre-button active-genre"
              : "genre-button"
          }
          onClick={(e) => handleGenreSelection(e)}
        >
          Soul
        </button>
        <button
          className={
            currentSongIndex === 1
              ? "genre-button active-genre"
              : "genre-button"
          }
          onClick={(e) => handleGenreSelection(e)}
        >
          Reggae
        </button>

        <button
          className={
            currentSongIndex === 2
              ? "genre-button active-genre"
              : "genre-button"
          }
          onClick={(e) => handleGenreSelection(e)}
        >
          Lounge
        </button>
        <button
          className={
            currentSongIndex === 3
              ? "genre-button active-genre"
              : "genre-button"
          }
          onClick={(e) => handleGenreSelection(e)}
        >
          Jazz
        </button>
        <button
          className={
            currentSongIndex === 4
              ? "genre-button active-genre"
              : "genre-button"
          }
          onClick={(e) => handleGenreSelection(e)}
        >
          World
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
