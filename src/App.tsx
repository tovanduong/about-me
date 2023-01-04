import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/header/header";
import About from "./page/about/about";
import Certificate from "./page/certificate/certificate";
import Project from "./page/project/project";
import Main from "./page/main";
import Skill from "./page/skill/skill";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
