import FrontendMentor from "./components/frontendmentor";
import Github from "./components/github";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/twitter";

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
            </section>
            {/* image */}
            <section></section>
          </div>
          <div className="skills-container"></div>
          <div className="projects-container"></div>
          <div className="contact-me"></div>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}

export default App;
