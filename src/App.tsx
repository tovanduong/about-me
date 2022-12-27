import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import About from "./page/about";
import Home from "./page/home";
import Messenger from "./page/messenger";
import Profile from "./page/profile";
import Setting from "./page/setting";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
