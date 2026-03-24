function Home() {
  return (
    <div>
      {/* HERO */}
      <header>
        <h1>Christopher M</h1>
        <p>
          Backend Engineer building scalable systems and reliable backend platforms.
        </p>

        <a href="https://www.linkedin.com/in/chriscodelab/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        <a href="https://github.com/ChrisCodeLab" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        <a href="https://leetcode.com/u/ChrisCodeLab/" target="_blank" rel="noopener noreferrer" className="btn">LeetCode</a>
        <a href="https://www.youtube.com/@ChrisCodeLab" target="_blank" rel="noopener noreferrer" className="btn">YouTube</a>
      </header>

      {/* ABOUT */}
      <section className="section container">
        <h2>About</h2>
        <p>
          I'm Christopher, a Backend Software Engineer with 3.7 years of experience building and deploying microservices for large-scale financial platforms.
          Strong expertise in Java, Spring Boot, REST APIs, and Oracle with hands-on experience in AWS-hosted production systems and CI/CD-driven deployments.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section container">
        <h2>Projects</h2>

        <div className="project">
          <strong>1. Veridex</strong>
          <p>
            Veridex preserves audit evidence as immutable, review-ready records across audit cycles.
            A secure system of record with full version history, timestamps, and ownership metadata.
          </p>
        </div>

        <div className="project">
          <strong>2. Student Project Showcase Platform</strong>
          <p>
            A system enabling students to share short project explanations and help recruiters discover talent beyond resumes.
          </p>
        </div>
      </section>

      {/* TECH */}
      <section className="section container">
        <h2>Tech Stack</h2>
        <p>
          Languages: Java, Python, SQL <br />
          Frameworks: Spring Boot, Spring MVC, Spring Core <br />
          Databases: Oracle, MySQL, PostgreSQL <br />
          Technologies & Tools: AWS, Microservices, REST API, Jenkins, GitHub <br />
          Core: Data Structures & Algorithms, OOP, DBMS
        </p>
      </section>

      {/* FOOTER */}
      <footer>© 2026 ChrisCodeLab</footer>
    </div>
  );
}

export default Home;