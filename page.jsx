export default function Page() {
  return (
    <div className="container">

      {/* HERO */}
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h1>Hi, I'm Sidratul 👨‍💻</h1>
        <p>Fullstack Developer • Tech Enthusiast • Problem Solver</p>
        <div>
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>

      {/* ABOUT */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I love technology, building websites, and learning programming.
          I enjoy creating real-world projects and improving my skills.
        </p>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2>Skills</h2>
        <p>HTML • CSS • JavaScript • React • Next.js • Node.js</p>
      </div>

      {/* PROJECTS */}
      <div className="card">
        <h2>Projects</h2>
        <ul>
          <li>E-commerce Website</li>
          <li>Tech Blog</li>
          <li>Electronics Mini Project</li>
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="card">
        <h2>Education</h2>
        <p>School / College Name</p>
      </div>

      {/* EXPERIENCE */}
      <div className="card">
        <h2>Experience</h2>
        <p>Freelance / Internship</p>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="card">
        <h2>Achievements</h2>
        <p>Certificates / Awards</p>
      </div>

      {/* ACTIVITIES */}
      <div className="card">
        <h2>Co-curricular Activities</h2>
        <p>Clubs • Volunteering • Events</p>
      </div>

      {/* CONTACT */}
      <div className="card" style={{ textAlign: "center" }}>
        <h2>Contact Me</h2>
        <p>Email: your@email.com</p>
        <button>GitHub</button>
        <button>Facebook</button>
        <button>LinkedIn</button>
      </div>

    </div>
  );
}