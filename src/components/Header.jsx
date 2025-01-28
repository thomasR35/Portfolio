import React, { useState } from "react";
import blackTr from "../assets/black_tr.png";
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
            <img src={blackTr} alt="Logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">//Home</Link>
            </li>
            <li>
              <Link to="/about">//About</Link>
            </li>
            <li>
              <Link to="/projects">//Projets</Link>
            </li>
            <li>
              <Link to="/contact">//Contact</Link>
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
