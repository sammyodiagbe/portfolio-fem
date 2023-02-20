import FrontendMentor from "./components/frontendmentor";
import Github from "./components/github";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/twitter";
import image1 from "./assets/thumbnail-project-1-large.webp";

function App() {
  return (
    <div className="portfolio-app">
      <div className="container">
        <nav className="navigation">
          <b className="logo">SamsonOdiagbe</b>
          <aside>
            <Github />
            <FrontendMentor />
            <LinkedIn />
            <Twitter />
          </aside>
        </nav>
        <main className="main-content">
          <div className="introduction">
            <section>
              <h1>
                Nice to meet you! I'm{" "}
                <span className="stand-out">Samson Odiagbe</span>
              </h1>
              <p>
                Based in Canada, I’m a full-stack developer passionate about
                building accessible web apps and mobile apps that users love.
              </p>
            </section>
            {/* image */}
            <section></section>
          </div>
          <div className="skills-container">
            <div className="skill">
              <h1>HTML</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>CSS</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>Javascript</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>Accesibility</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>React</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>Sass</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>Nodejs</h1>
              <b>4 years Experience</b>
            </div>
            <div className="skill">
              <h1>TypeScript</h1>
              <b>4 years Experience</b>
            </div>
          </div>
          <div className="projects-container">
            <div className="project-container-head">
              <h1>Projects</h1>

              <a href="../kskk">Contact me</a>
            </div>
            <div className="projects">
              <div className="project">
                <div className="img-container">
                  <img src={image1} alt="First project image" />
                </div>
                <div className="project-details">
                  <h2>Design Portfolio</h2>
                  <b>HTML CSS</b>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me"></div>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}

export default App;
