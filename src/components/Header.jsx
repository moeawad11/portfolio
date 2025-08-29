import "./Header.css";
import React, { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar">
      <a href="#hero" className={activeSection === "hero" ? "active" : ""}>
        Home
      </a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>
        About
      </a>
      <a
        href="#projects"
        className={activeSection === "projects" ? "active" : ""}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={activeSection === "contact" ? "active" : ""}
      >
        Contact
      </a>
    </nav>
  );
}

export default Header;
