import About from "./about/about";
import Certificate from "./certificate/certificate";
import Home from "./home/home";
import Project from "./project/project";
import Skill from "./skill/skill";

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Skill />
      <Certificate />
      <Project />
    </main>
  );
};

export default Main;
