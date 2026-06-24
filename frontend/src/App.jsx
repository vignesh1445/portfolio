import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <section className="hero">
        <h1>Hi, I'm Vigneshwar D</h1>
        <h2><h2>
  Electronics & Instrumentation Engineer | MERN Stack Developer
</h2></h2>
        <p>
          Passionate about Full Stack Development, IoT, Industrial
          Automation, and building innovative solutions using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section className="objective">
        <h2>Career Objective</h2>
        <p>
          Motivated Electronics and Instrumentation Engineering student
          seeking opportunities in Software Development, Full Stack Web
          Development, IoT, and Automation.
        </p>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Currently pursuing B.E. Electronics & Instrumentation Engineering
          at Kongu Engineering College with a CGPA of 7.77. Interested in
          MERN Stack Development, IoT, and Industrial Automation.
        </p>
      </section>

      <section className="skills">
        <h2>Programming Skills</h2>

        <div className="skill-container">
          <div className="skill">C</div>
          <div className="skill">Python</div>
          <div className="skill">Java</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
        </div>
      </section>

      <section className="skills">
        <h2>Core EIE Skills</h2>

        <div className="skill-container">
          <div className="skill">Industrial Instrumentation</div>
          <div className="skill">Process Control</div>
          <div className="skill">Sensors & Transducers</div>
          <div className="skill">Industrial Automation</div>
          <div className="skill">IoT Systems</div>
          <div className="skill">Node-RED</div>
          <div className="skill">Relay Logic</div>
          <div className="skill">AutoCAD</div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>
          <p>
            Developed a MERN Stack application to manage student attendance.
          </p>
          <p><strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB</p>
        </div>

        <div className="project-card">
          <h3>Environment Monitoring System for Poultry Farm</h3>
          <p>
            IoT-based monitoring system for temperature and humidity control.
          </p>
        </div>

        <div className="project-card">
          <h3>Biomass Briquette Production</h3>
          <p>
            Renewable energy project utilizing agricultural waste.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            Responsive portfolio website built using React and CSS.
          </p>
        </div>
      </section>

      <section className="training">
        <h2>Industrial Learning & Technical Exposure</h2>

        <div className="project-card">
          <h3>Node-RED Application Development</h3>
          <p>
            Industrial dashboards, IoT integration and workflow automation.
          </p>
        </div>

        <div className="project-card">
          <h3>Relay Logic for Industrial Instrumentation</h3>
          <p>
            Practical exposure to industrial control systems and automation.
          </p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications & Courses</h2>

        <div className="project-card">
          <h3>AutoCAD</h3>
          <p>Engineering drafting and technical design.</p>
        </div>

        <div className="project-card">
          <h3>Biomedical Instrumentation</h3>
          <p>Medical instruments, sensors and monitoring systems.</p>
        </div>

        <div className="project-card">
          <h3>Node-RED</h3>
          <p>Industrial IoT dashboard development.</p>
        </div>

        <div className="project-card">
          <h3>Relay Logic</h3>
          <p>Industrial automation and control circuits.</p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>

        <div className="project-card">
          <h3>B.E. Electronics & Instrumentation Engineering</h3>
          <p><strong>Kongu Engineering College</strong></p>
          <p>2024 - Present</p>
          <p>CGPA: 7.77</p>
        </div>

        <div className="project-card">
          <h3>Higher Secondary Education (HSC)</h3>
          <p><strong>Shri Vidhyabharathi Matric Higher Secondary School</strong></p>
          <p>Sakkarampalayam, Namakkal</p>
          <p>Percentage: 87.5%</p>
        </div>

        <div className="project-card">
          <h3>Secondary School Education (SSLC)</h3>
          <p><strong>Shri Vidhyabharathi Matric Higher Secondary School</strong></p>
          <p>Sakkarampalayam, Namakkal</p>
          <p>Percentage: 81.2%</p>
        </div>
      </section>

      <section className="languages">
        <h2>Languages Known</h2>

        <div className="skill-container">
          <div className="skill">Tamil</div>
          <div className="skill">English</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>

        <p>📧 vigneshward.24eie@kongu.edu</p>
        <p>📱 +91 6381391445</p>

        <div className="socials">
          <a href="https://github.com/">GitHub</a>
          <a href="https://linkedin.com/">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Vigneshwar D. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;