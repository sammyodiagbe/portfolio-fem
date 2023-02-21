import FrontendMentor from "./components/frontendmentor";
import Github from "./components/github";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/twitter";
import image1 from "./assets/thumbnail-project-1-large.webp";
import image2 from "./assets/thumbnail-project-2-large.webp";
import image3 from "./assets/thumbnail-project-3-large.webp";

function App() {
  return (
    <div className="portfolio-app">
      <div className="container">
        <nav className="navigation">
          <b className="logo">SamsonOdiagbe</b>
          <aside className="social-links">
            <a href="#kkk">
              <Github />
            </a>
            <a href="#ll">
              <FrontendMentor />
            </a>
            <a href="#ud">
              <LinkedIn />
            </a>
            <a href="#link">
              <Twitter />
            </a>
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
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>CSS</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>Javascript</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>Accesibility</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>React</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>Sass</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>Nodejs</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>TypeScript</h1>
              <p>4 years Experience</p>
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
                  <img src={image1} alt="First project" />
                </div>
                <div className="project-details">
                  <h2>Design Portfolio</h2>
                  <p>HTML CSS</p>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image2} alt="First project" />
                </div>
                <div className="project-details">
                  <h2>Design Portfolio</h2>
                  <p>HTML CSS</p>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image3} alt="First project" />
                </div>
                <div className="project-details">
                  <h2>Design Portfolio</h2>
                  <p>HTML CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me">
            <section className="writeup-container">
              <h1>Contact.</h1>
              <p>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </p>
            </section>
            <section className="form-container">
              <form>
                <div className="input-container">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input-container">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-container">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="btn-container">
                  <button className="btn-submit">Send Message</button>
                </div>
              </form>
            </section>
          </div>
          <footer className="footer">
            <b className="logo">SamsonOdiagbe</b>
            <aside className="social-links">
              <a href="#kkk">
                <Github />
              </a>
              <a href="#ll">
                <FrontendMentor />
              </a>
              <a href="#ud">
                <LinkedIn />
              </a>
              <a href="#link">
                <Twitter />
              </a>
            </aside>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
