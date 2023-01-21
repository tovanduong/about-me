import React, { useEffect, useRef, useState } from "react";
import "./skillStyle.scss";
import NumberCounter from "number-counter";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const Skill = () => {
  const divRef = useRef();
  const [isIntoView, setIsIntoView] = useState(false);
  const [classAnimation, setClassAnimation] = useState([]);
  const [counter, setCounter] = useState([]);
  let location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect(() => {
    window.addEventListener("scroll", onListenScroll);
    return () => {
      window.removeEventListener("scroll", onListenScroll);
    };
  }, []);

  const onListenScroll = (e) => {
    if (divRef.current) {
      let isIntoView = isInViewport(divRef.current);
      setIsIntoView(isIntoView);
    }
  };
  useEffect(() => {
    if (isIntoView || location.pathname === "/skill") {
      setClassAnimation(["activeHtml", "activeCss", "activeJs", "activeReact"]);
      setCounter([75, 85, 80, 90]);
    } else {
      setClassAnimation([]);
      setCounter([]);
    }
  }, [isIntoView, location.pathname]);
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <section className="sec-skill">
      <div className="skill-title">
        <h4>My Skill</h4>
        <span>What I Know</span>
      </div>
      <div className="skill-group">
        <p className="info-skill">
        During my study and work, I had certain skills to complete the tasks of 1 FE. First, it is indispensable for basic knowledge such as html, css, javascript. During 1 year of working with react js, I self-assessed my competence in react js. Also I know about libraries to support like styled-component, material ui, axios and end to end testing like cypress.
        </p>
        <div className="chart-skill">
          <div className={`html ${classAnimation[0]}`}>
            <p>HTML:</p>
            <span></span>
            {counter.length && (
              <Box display="flex">
                <NumberCounter
                  className="counting"
                  end={counter[0]}
                  delay={3}
                />
                <div className="counting-per">%</div>
              </Box>
            )}
          </div>
          <div className={`css ${classAnimation[1]}`} ref={divRef}>
            <p>CSS:</p>
            <span></span>
            {counter.length && (
              <Box display="flex">
                <NumberCounter
                  className="counting"
                  end={counter[1]}
                  delay={3}
                />
                <div className="counting-per">%</div>
              </Box>
            )}
          </div>
          <div className={`javascript ${classAnimation[2]}`}>
            <p>Javascript:</p>
            <span></span>
            {counter.length && (
              <Box display="flex">
                <NumberCounter
                  className="counting"
                  end={counter[2]}
                  delay={3}
                />
                <div className="counting-per">%</div>
              </Box>
            )}
          </div>
          <div className={`ReactJs ${classAnimation[3]}`}>
            <p>React Js:</p>
            <span></span>
            {counter.length && (
              <Box display="flex">
                <NumberCounter
                  className="counting"
                  end={counter[3]}
                  delay={3}
                />
                <div className="counting-per">%</div>
              </Box>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
