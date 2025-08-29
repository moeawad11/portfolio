// src/components/About.jsx
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Full Stack Web Developer with experience in both
              frontend and backend technologies. I enjoy building efficient,
              scalable, and user-friendly applications. My journey in
              programming, starting with competitive programming, has sharpened
              my problem-solving skills, and I often spend time exploring new
              technologies and working on ideas that challenge me creatively.
            </p>
          </div>

          <hr className="section-divider" />

          <div className="skills-content">
            <div className="subsection">
              <h2>Technical Skills</h2>

              <div className="skill-category">
                <h3>Languages</h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>C#</li>
                  <li>ASP.NET</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Databases</h3>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Tools & Other</h3>
                <ul>
                  <li>Git</li>
                  <li>REST APIs</li>
                  <li>Linux</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
