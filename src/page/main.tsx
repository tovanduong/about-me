import About from "./about/about";
import Certificate from "./certificate/certificate";
import Home from "./home/home";
import Project from "./project/project";
import Skill from "./skill/skill";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Certificate />
      <Project />
    </div>
  );
};

export default Main;
