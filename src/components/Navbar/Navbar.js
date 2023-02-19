import React from "react";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleClick}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link style={{ textDecoration: "none" }} to="/team">
            Team
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link style={{ textDecoration: "none" }} to="/events">
            Events
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link style={{ textDecoration: "none" }} to="/gallery">
            Gallery
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact Us
          </Link>
        </li>
        <button className="button-64">
          <span className="text">Join Us</span>
        </button>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={23} style={{ color: "#fff" }} />
        ) : (
          <CgMenuRight size={23} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
