import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Book Notes",
    description:
      "A web application for managing and organizing book notes with a clean UI and efficient workflows, allowing users to track their reading progress, store notes and reviews, and manage book entries easily.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "EJS", "CSS", "JavaScript"],
    github: "https://github.com/moeawad11/BookNotes",
  },
  {
    title: "Home Nest",
    description:
      "A mobile application for browsing and managing real estate listings, featuring property categories, filters, and CRUD operations, enabling users to explore, save, and post properties seamlessly.",
    tech: ["PHP", "MySQL", "Java", "XML", "Android SDK"],
    github: "https://github.com/Adeebbm/mobile_project_frontend",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and contact information, built with React and responsive design, providing an interactive platform to present my work and professional profile effectively.",
    tech: ["React.js", "Vite", "Vercel"],
    github: "https://github.com/moeawad11/portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`${project.title} GitHub`}
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
