import React from "react";
import "../styles/components/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} - Thomas Riou. Tous droits réservés.
        </p>
        <ul className="footer-links">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-riou-b93939341/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasR35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
