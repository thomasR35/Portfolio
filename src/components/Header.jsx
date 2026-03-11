// ============================================================
// Header.jsx — toggle dark mode avec label en dessous
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";
import WestDevLight from "../assets/westdev_logo.png";
import WestDevDark from "../assets/westdev_logo_dark.png";
import "../styles/components/_header.scss";
import { useDarkMode } from "../hooks/useDarkMode";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={isDark ? WestDevDark : WestDevLight} alt="WestDev logo" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                //Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                //À Propos
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                //Projets
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                //Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          {/* Toggle dark mode */}
          <button
            className={`theme-toggle ${isDark ? "theme-toggle--dark" : ""}`}
            onClick={toggle}
            aria-label={
              isDark ? "Passer en mode clair" : "Passer en mode sombre"
            }
            role="switch"
            aria-checked={isDark}
          >
            <span className="theme-toggle__track">
              <span className="theme-toggle__thumb" />
            </span>
            <span className="theme-toggle__label">
              {isDark ? "Dark" : "Light"}
            </span>
          </button>

          {/* Burger */}
          <button
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
