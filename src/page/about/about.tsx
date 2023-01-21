import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./aboutStyle.scss";
import CardInfo from "./cardInfo/cardInfo";
const About = () => {
  const [classSection, setClassSection] = useState<string>("");
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setClassSection("");
    } else {
      setClassSection("layoutSec");
    }
  }, [location.pathname]);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <section className={`sec-about ${classSection}`}>
      <div className="about-me">
        <h4>About Me</h4>
        <span>Who am I</span>
      </div>
      <div className="cardInfo">
        <CardInfo />
        <div className="about-info">
          <p className="info-text">
          Hello! My name is Duong, I am a front end developer, I graduated from Hanoi University of Industry. I have 1 year experience in website development. I always try to learn and develop myself, learn new technologies and make good use of what I already have. There are 2 things I always follow, it's like a rule of mine. First, As an FE, I am aware of the importance of user interface (ui) and user experience (ux). I always try to put myself as a user so that I can develop the best websites with high performance. Second, I always uphold credibility and responsibility (not finished task, not resting).
          <br/>
          <i><strong>Trust me and give me a chance, I will prove my worth.</strong></i>
          </p>
          <button className="info-button">Download my cv</button>
        </div>
      </div>
    </section>
  );
};

export default About;


