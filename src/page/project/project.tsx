import CardPrj from "./component/cardprj";
import "./projectStyle.scss";
import skola from "../../image/skola.PNG";
import foodShop from "../../image/foodorder.PNG";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Project = () => {
  const [listImage, setListImage] = useState<any[]>([]);
  const [classSection, setClassSection] = useState<string>("");
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setClassSection("");
    } else {
      setClassSection("layoutSec");
    }
  }, [location.pathname]);
  useEffect(() => {
    setListImage([
      {
        image: skola,
        title: "Skola",
        desc: "React App E-commerce website",
        content: "This is the website code by React Js. Using some libraries as follows: style: sass, bootstrap, routing: React-Router-dom, state management: Redux, Redux-thunk, some lib ui: Swiper, react-tab..."
      },
      {
        image: foodShop,
        title: "Food Shop App",
        desc: "React App Restaurant website",
        content: "This is the restaurant website, using some libraries such as axios, react-router-dom v6, redux, redux-thunk, material ui and some other support libs..."
      },
    ]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className={`sec-project ${classSection}`}>
      <div className="prj-title">
        <h4>My Project</h4>
        <span>What I Did</span>
      </div>
      <div className="prj-container">
        <div className="cardPrjInfo">
          {listImage &&
            listImage.map((el: any, index) => {
              return (
                <div className="card-item" key={index}>
                  <CardPrj image={el.image} title={el.title} desc={el.desc} />
                  <div className="prj-card-group">
                    <h3>{el.title}</h3>
                    <p className="prj-text">
                      {el.content}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <p className='note-prj'>In addition, my teammates and I are developing a webviewer camera project with a Korean customer. But for security reasons I can't share.</p>
      </div>

    </section>
  );
};

export default Project;
