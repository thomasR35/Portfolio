import React, { useState } from "react";
import WestDev from "../assets/westdev_logo.png";
import "../styles/components/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={WestDev} alt="Logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                //Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                //À Propos
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                //Projets
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                //Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`burger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
