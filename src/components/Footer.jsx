import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialIcons">
        <a
          href="https://www.linkedin.com/in/mohammad-awad-87b6b1297"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/moeawad11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Mohammad Awad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
