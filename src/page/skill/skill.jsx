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
    console.log(isIntoView);

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
      <div ref={divRef} className="skill-title">
        <h4>My Skill</h4>
        <span>What I Know</span>
      </div>
      <div className="skill-group">
        <p className="info-skill">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quae
          eaque earum voluptatibus dignissimos at corrupti rem fugit adipisci
          perspiciatis, cum veniam officia omnis ullam voluptas, mollitia facere
          aperiam? Deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Dolorum quae eaque earum voluptatibus dignissimos at corrupti
          rem fugit adipisci perspiciatis, cum veniam officia omnis ullam
          voluptas, mollitia facere aperiam? Deleniti.
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
                <div className="counting">%</div>
              </Box>
            )}
          </div>
          <div className={`css ${classAnimation[1]}`}>
            <p>CSS:</p>
            <span></span>
            {counter.length && (
              <Box display="flex">
                <NumberCounter
                  className="counting"
                  end={counter[1]}
                  delay={3}
                />
                <div className="counting">%</div>
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
                <div className="counting">%</div>
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
                <div className="counting">%</div>
              </Box>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
