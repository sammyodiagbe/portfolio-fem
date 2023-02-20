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
      </div>
    </div>
  );
}

export default App;
