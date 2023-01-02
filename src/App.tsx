import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./component/header/header";
import About from "./page/about/about";
import Home from "./page/home/home";
import Messenger from "./page/contact/messenger";
import Profile from "./page/certificate/profile";
import Main from "./page/main";
import Skill from "./page/skill/skill";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
