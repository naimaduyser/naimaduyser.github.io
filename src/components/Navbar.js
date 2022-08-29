import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import { FaBars, FaTimes } from "react-icons/fa";

// Styling
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <NavLink exact to="/" className="logo">
        Naima Fatima Duyser
      </NavLink>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={() => setClick((prevState) => !prevState)}
      >
        <li>
          <NavLink exact to="/about" className="navlink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/films" className="navlink">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/programming" className="navlink">
            Programming
          </NavLink>
        </li>
        <li>
          <a href="https://naima.world" target="_blank" rel="noreferrer" className="navlink">Radio</a>
        </li>
        <li>
          <NavLink exact to="/contact" className="navlink">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
