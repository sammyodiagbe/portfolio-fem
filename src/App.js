import FrontendMentor from "./components/frontendmentor";
import Github from "./components/github";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/twitter";
import image1 from "./assets/thumbnail-project-1-large.webp";
import image2 from "./assets/thumbnail-project-2-large.webp";
import image4 from "./assets/thumbnail-project-4-large.webp";
import image5 from "./assets/tic-tac-toe.webp";
import image6 from "./assets/news-homepage.webp";
import myPicture from "./assets/samson.svg";
import img9 from "./assets/img9.webp";
import img10 from "./assets/img10.webp";
import img11 from "./assets/img11.webp";
import img12 from "./assets/img12.webp";
import img13 from "./assets/brainbook.webp";
import img15 from "./assets/img16.webp";
import img16 from "./assets/img17.webp";
import img17 from "./assets/img15.webp";
import img18 from "./assets/order-summary.webp";
import img19 from "./assets/img19.webp";
import { useState } from "react";
import { useRef } from "react";
import { validateData } from "./utils";
import emailjs from "@emailjs/browser";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    const data = validateData({ name, email, message });
    const errors = Object.entries(validateData).length;
    if (errors > 0) {
      setErrors(data);
      return;
    }

    // no error was found and data is valid send the email
    try {
      setSendingMessage(true);
      await emailjs.sendForm(
        "service_g9zwgfk",
        "template_xnnnbep",
        formRef.current,
        "0N4qbFxrD0vkKzOoY"
      );
      setErrors({});
      setSendingMessage(false);
      setMessageSent(true);

      setTimeout(() => setMessageSent(false), 300);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="portfolio-app">
      <div className="container">
        <nav className="navigation">
          <b className="logo">SamsonOdiagbe</b>
          <aside className="social-links">
            <a href="https://github.com/sammyodiagbe" target="_blank">
              <Github />
            </a>
            <a href="https://www.frontendmentor.io/profile/sammyodiagbe">
              <FrontendMentor />
            </a>
            <a href="https://www.linkedin.com/in/sam-odiagbe-70053b239/">
              <LinkedIn />
            </a>
            <a href="https://twitter.com/samthedevguy">
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
                    <a
                      href="https://single-page-design-portfolio-one.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/single-page-design-portfolio"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Single Page Design Portfolio</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://single-page-design-portfolio-one.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/single-page-design-portfolio"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img19} alt="First project" />
                  <div className="view">
                    <a
                      href="https://connect-four-41z45w5yw-sammyodiagbe.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/connect-four"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Connect Four Javascript</h3>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a
                    href="https://connect-four-41z45w5yw-sammyodiagbe.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/connect-four"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image2} alt="First project" />
                  <div className="view">
                    <a
                      href="https://skilled-elearning-landng-page.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/skilled-elearning-landng-page"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Skilled E-Learning Landing page</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://skilled-elearning-landng-page.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/skilled-elearning-landng-page"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img15} alt="First project" />
                  <div className="view">
                    <a href="https://feedbakiie.vercel.app/" target="_black">
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/product_feedback_app"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Feedback App</h3>
                  <p>React Sass Javascript</p>
                </div>
                <div className="view">
                  <a href="https://feedbakiie.vercel.app/" target="_black">
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/product_feedback_app"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image4} alt="First project" />
                  <div className="view">
                    <a
                      href="https://entertainment-web-app-rho.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/entertainment_web_app"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Entertainment Web App</h3>
                  <p>HTML CSS JAVASCRIPT</p>
                </div>
                <div className="view">
                  <a
                    href="https://entertainment-web-app-rho.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/entertainment_web_app"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image5} alt="First project" />
                  <div className="view">
                    <a
                      href="https://tic-tac-r0lyvrfef-sammyodiagbe.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/tic-tac-toe"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Tic Tac Toe</h3>
                  <p>React Sass</p>
                </div>
                <div className="view">
                  <a
                    href="https://tic-tac-r0lyvrfef-sammyodiagbe.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/tic-tac-toe"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={image6} alt="First project" />
                  <div className="view">
                    <a
                      href="https://news-homepage-teal-tau.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/news-homepage"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>News HomePage</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://news-homepage-teal-tau.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/news-homepage"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img13} alt="First project" />
                  <div className="view">
                    <a href="https://brainbook.vercel.app/" target="_black">
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/brainbook"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Brainbook (Dictionary app)</h3>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a href="https://brainbook.vercel.app/" target="_black">
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/brainbook"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img9} alt="First project" />
                  <div className="view">
                    <a
                      href="https://sammyodiagbe.github.io/Loopstudios-landing-page/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/Loopstudios-landing-page"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Loop Studio</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://sammyodiagbe.github.io/Loopstudios-landing-page/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/Loopstudios-landing-page"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img12} alt="First project" />
                  <div className="view">
                    <a
                      href="https://sammyodiagbe.github.io/responsive-bookmark/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/responsive-bookmark"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Bookmark Landing Page</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://sammyodiagbe.github.io/responsive-bookmark/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/responsive-bookmark"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div className="project">
                <div className="img-container">
                  <img src={img16} alt="First project" />
                  <div className="view">
                    <a
                      href="https://multi-step-form-nu.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/multi_step_form"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Multi Step Form</h3>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a
                    href="https://multi-step-form-nu.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/multi_step_form"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img17} alt="First project" />
                  <div className="view">
                    <a
                      href="https://suite-landing-6uw4ujfr4-sammyodiagbe.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/suite_landing"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Suite Landing Page</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://suite-landing-6uw4ujfr4-sammyodiagbe.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/suite_landing"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img18} alt="First project" />
                  <div className="view">
                    <a
                      href="https://order-summary-component-cddosuomw-sammyodiagbe.vercel.app/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/order-summary-component"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Order Summary Component</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://order-summary-component-cddosuomw-sammyodiagbe.vercel.app/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/order-summary-component"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div className="project">
                <div className="img-container">
                  <img src={img10} alt="First project" />
                  <div className="view">
                    <a
                      href="https://sammyodiagbe.github.io/interactive-pricing-component/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/interactive-pricing-component"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Interactive Price Component</h3>
                  <p>HTML CSS</p>
                </div>
                <div className="view">
                  <a
                    href="https://sammyodiagbe.github.io/interactive-pricing-component/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/interactive-pricing-component"
                    target="_black"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img-container">
                  <img src={img11} alt="First project" />
                  <div className="view">
                    <a
                      href="https://sammyodiagbe.github.io/tip-calculator/"
                      target="_black"
                    >
                      View website
                    </a>
                    <a
                      href="https://github.com/sammyodiagbe/tip-calculator"
                      target="_black"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>Tip Calculator</h3>
                  <p>HTML CSS Javascript</p>
                </div>
                <div className="view">
                  <a
                    href="https://sammyodiagbe.github.io/tip-calculator/"
                    target="_black"
                  >
                    View website
                  </a>
                  <a
                    href="https://github.com/sammyodiagbe/tip-calculator"
                    target="_black"
                  >
                    View Code
                  </a>
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
              <form onSubmit={sendEmail} ref={formRef}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Your name here.."
                    style={`${errors.name ? "input-error" : ""}`}
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Your email here"
                    style={`${errors.email ? "input-error" : ""}`}
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>
                <div className="input-container">
                  <textarea
                    placeholder="Your message here"
                    value={message}
                    style={`${errors.message ? "input-error" : ""}`}
                    onChange={({ target }) => setMessage(target.value)}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button
                    className={`btn-submit ${
                      sendingMessage ? "sending-message" : ""
                    } ${messageSent ? "message-sent" : ""}`}
                    disabled={sendingMessage || messageSent}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </div>
          <footer className="footer">
            <b className="logo">SamsonOdiagbe</b>
            <aside className="social-links">
              <a href="https://github.com/sammyodiagbe" target="_blank">
                <Github />
              </a>
              <a href="https://www.frontendmentor.io/profile/sammyodiagbe">
                <FrontendMentor />
              </a>
              <a href="https://www.linkedin.com/in/sam-odiagbe-70053b239/">
                <LinkedIn />
              </a>
              <a href="https://twitter.com/samthedevguy">
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
