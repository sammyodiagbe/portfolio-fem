import FrontendMentor from "./components/frontendmentor";
import Github from "./components/github";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/twitter";
import image1 from "./assets/thumbnail-project-1-large.webp";
import image2 from "./assets/thumbnail-project-2-large.webp";
import image3 from "./assets/thumbnail-project-3-large.webp";
import image4 from "./assets/thumbnail-project-4-large.webp";
import image5 from "./assets/tic-tac-toe.webp";
import image6 from "./assets/news-homepage.webp";
import myPicture from "./assets/samson.svg";
import img9 from "./assets/img9.webp";
import img10 from "./assets/img10.webp";
import img11 from "./assets/img11.webp";
import img12 from "./assets/img12.webp";
import img13 from "./assets/brainbook.webp";
import img14 from "./assets/img14.webp";
import img15 from "./assets/img16.webp";
import img16 from "./assets/img17.webp";
import img17 from "./assets/img18.webp";
import img18 from "./assets/img15.webp";
import img19 from "./assets/img19.webp";

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
            <section className="image-container">
              <img
                src={myPicture}
                alt="Samson odiagbe Osaro"
                className="my-picture"
              />
            </section>
            <section className="write-up">
              <h1>
                Nice to meet you!, I'm{" "}
                <span className="stand-out">Samson Odiagbe😎.</span>
              </h1>
              <p>
                Based in Canada, I’m a full-stack developer passionate about
                building accessible web apps and mobile apps that users love.
              </p>
              <a href="#contact-me">Contact me</a>
            </section>
            {/* image */}
          </div>
          <div className="skills-container">
            <div className="skill">
              <h1>HTML</h1>
              <p>5 years Experience</p>
            </div>
            <div className="skill">
              <h1>CSS</h1>
              <p>5 years Experience</p>
            </div>
            <div className="skill">
              <h1>Javascript</h1>
              <p>4 years Experience</p>
            </div>
            <div className="skill">
              <h1>Accesibility</h1>
              <p>1 years Experience</p>
            </div>
            <div className="skill">
              <h1>React</h1>
              <p>3 years Experience</p>
            </div>
            <div className="skill">
              <h1>Sass</h1>
              <p>2 years Experience</p>
            </div>
            <div className="skill">
              <h1>Nodejs</h1>
              <p>2 years Experience</p>
            </div>
            <div className="skill">
              <h1>TypeScript</h1>
              <p>1 years Experience</p>
            </div>
          </div>
          <div className="projects-container">
            <div className="project-container-head">
              <h1>Projects</h1>

              <a href="#contact-me">Contact me</a>
            </div>
            <div className="projects">
              <div className="project">
                <div className="img-container">
                  <img src={image1} alt="First project" />
                  <div className="view">
                    <a href="https://single-page-design-portfolio-one.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/single-page-design-portfolio">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Single Page Design Portfolio</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="https://single-page-design-portfolio-one.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/single-page-design-portfolio">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img19} alt="First project" />
                  <div className="view">
                    <a href="https://connect-four-41z45w5yw-sammyodiagbe.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/connect-four">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Connect Four Javascript</h2>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="https://connect-four-41z45w5yw-sammyodiagbe.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/connect-four">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image2} alt="First project" />
                  <div className="view">
                    <a href="https://skilled-elearning-landng-page.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/skilled-elearning-landng-page">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Skilled E-Learning Landing page</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="https://skilled-elearning-landng-page.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/skilled-elearning-landng-page">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image3} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Dev Jobs</h2>
                  <p>React Sass</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image4} alt="First project" />
                  <div className="view">
                    <a href="https://entertainment-web-app-rho.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/entertainment_web_app">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Entertainment Web App</h2>
                  <p>HTML CSS JAVASCRIPT</p>
                </div>
                <div className="view">
                  <a href="https://entertainment-web-app-rho.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/entertainment_web_app">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image5} alt="First project" />
                  <div className="view">
                    <a href="https://tic-tac-r0lyvrfef-sammyodiagbe.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/tic-tac-toe">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Tic Tac Toe</h2>
                  <p>React Sass</p>
                </div>
                <div className="view">
                  <a href="https://tic-tac-r0lyvrfef-sammyodiagbe.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/tic-tac-toe">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image6} alt="First project" />
                  <div className="view">
                    <a href="https://news-homepage-teal-tau.vercel.app/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/news-homepage">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>News HomePage</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="https://news-homepage-teal-tau.vercel.app/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/news-homepage">
                    View Code
                  </a>
                </div>
              </div>

              <div className="project">
                <div className="img-container">
                  <img src={img9} alt="First project" />
                  <div className="view">
                    <a href="https://sammyodiagbe.github.io/Loopstudios-landing-page/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/Loopstudios-landing-page">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Loop Studio</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="https://sammyodiagbe.github.io/Loopstudios-landing-page/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/Loopstudios-landing-page">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img10} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Interactive Price Component</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img11} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Tip Calculator</h2>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img12} alt="First project" />
                  <div className="view">
                    <a href="https://sammyodiagbe.github.io/responsive-bookmark/">
                      View website
                    </a>
                    <a href="https://github.com/sammyodiagbe/responsive-bookmark">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Bookmark Landing Page</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="https://sammyodiagbe.github.io/responsive-bookmark/">
                    View website
                  </a>
                  <a href="https://github.com/sammyodiagbe/responsive-bookmark">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img13} alt="First project" />
                  <div className="view">
                    <a href="https://brainbook.vercel.app/">View website</a>
                    <a href="https://github.com/sammyodiagbe/brainbook">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Brainbook (Dictionary app)</h2>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="https://brainbook.vercel.app/">View website</a>
                  <a href="https://github.com/sammyodiagbe/brainbook">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img14} alt="First project" />
                  <div className="view">
                    <a href="https://brainbook.vercel.app/">View website</a>
                    <a href="https://github.com/sammyodiagbe/brainbook">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Project Feedback</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img15} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Project Feedback</h2>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img16} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Multi Step Form</h2>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img17} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Dictionary App</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img18} alt="First project" />
                  <div className="view">
                    <a href="#view-website">View website</a>
                    <a href="#view-code">View Code</a>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Suite Landing Page</h2>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a href="#view-website">View website</a>
                  <a href="#view-code">View Code</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me" id="contact-me">
            <section className="writeup-container">
              <h1>Contact.</h1>
              <p>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </p>
            </section>
            <section className="form-container">
              <h3>Send me a message.</h3>
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
