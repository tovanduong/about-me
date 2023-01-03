import CardPrj from "./component/cardprj";
import "./projectStyle.scss";
import skola from "../../image/skola.PNG";
import foodShop from "../../image/foodorder.PNG";
import { useEffect, useState } from "react";
const Project = () => {
  const [listImage, setListImage] = useState<any[]>([]);
  useEffect(() => {
    setListImage([
      {
        image: skola,
        title: "Skola",
        desc: "React App E-commerce website",
      },
      {
        image: foodShop,
        title: "Food Shop App",
        desc: "React App Restaurant website",
      },
    ]);
  }, []);
  return (
    <section className="sec-project">
      <div className="prj-title">
        <h4>My Project</h4>
        <span>What I Did</span>
      </div>
      <div className="cardPrjInfo">
        {listImage &&
          listImage.map((el: any) => {
            return (
              <div className="card-item">
                <CardPrj image={el.image} title={el.title} desc={el.desc} />
                <div className="prj-card-group">
                  <h3>{el.title}</h3>
                  <div className="prj-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eos natus hic, reprehenderit iure maiores, quas nobis magni
                    id dolores laborum consequatur totam rem, animi pariatur.
                    Architecto reiciendis quia cumque beatae! Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Eos natus hic,
                    reprehenderit iure maiores, quas nobis magni id dolores
                    laborum consequatur totam rem, animi pariatur. Architecto
                    reiciendis quia cumque beatae! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Eos natus hic, reprehenderit
                    iure maiores, quas nobis magni id dolores laborum
                    consequatur totam rem, animi pariatur. Architecto reiciendis
                    quia cumque beatae! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Eos natus hic, reprehenderit iure maiores,
                    quas nobis magni id dolores laborum consequatur totam rem,
                    animi pariatur. Architecto reiciendis quia cumque beatae!
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Project;
