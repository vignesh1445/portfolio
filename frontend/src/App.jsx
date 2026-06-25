import React from "react";
import "./App.css";

function Portfolio() {
  return (
    <div className="portfolio">

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <h1>Hi, I'm Vigneshwar</h1>
        <h2>MERN Stack Developer</h2>

        <p>
          I am a passionate Full Stack Developer specializing in building
          modern, responsive, and scalable web applications using React,
          Node.js, Express, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am an Electronics and Instrumentation Engineering student with
          strong interest in software development. I enjoy building real-world
          projects and improving my skills in full stack development.
        </p>
      </section>

      {/* ================= OBJECTIVE ================= */}
      <section className="objective">
        <h2>Career Objective</h2>
        <p>
          To secure a challenging position in a reputed organization where I
          can apply my technical skills in MERN stack development and grow as a
          professional software engineer.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section>
        <h2>Skills</h2>
        <div className="skill-container">
          <div className="skill">C</div>
          <div className="skill">Python</div>
          <div className="skill">Java</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <h2>Projects</h2>

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>Smart Attendance Management System (MERN Stack)</h3>
          <p>
            A full-stack web application to manage daily student attendance.
            Built using React, Node.js, Express, and MongoDB Atlas.
            Features include real-time attendance marking, search,
            reset functionality, and attendance dashboard.
          </p>
          <p><b>Tech Stack:</b> React, Node.js, Express, MongoDB</p>

          <p>
            🔗 Live Project:{" "}
            <a href="https://your-live-project-link.com" target="_blank" rel="noreferrer">
              Click Here
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
              View Code
            </a>
          </p>
        </div>

        {/* PROJECT 2 (Optional Example) */}
        <div className="project-card">
          <h3>IoT Based Monitoring System</h3>
          <p>
            An IoT project used for real-time sensor data monitoring and
            visualization for industrial applications.
          </p>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="education">
        <h2>Education</h2>

        <div className="project-card">
          <h3>B.E. Electronics and Instrumentation Engineering</h3>
          <p>Kongu Engineering College</p>
          <p>CGPA: 7.77</p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <p>Email: vigneshward.24eie@kongu.edu</p>
        <p>Phone: +91-XXXXXXXXXX</p>

        <div className="socials">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Vigneshwar | MERN Stack Developer</p>
      </footer>

    </div>
  );
}

export default Portfolio;