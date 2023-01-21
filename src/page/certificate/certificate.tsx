import React, { useEffect, useState } from "react";
import CardCetificate from "./component/card";
import "./cerificateStyle.scss";
import Certi1 from "../../image/certi1.PNG";
import Certi2 from "../../image/certi2.PNG";
import Certi3 from "../../image/certi3.PNG";
import Certi4 from "../../image/certi4.PNG";
const Certificate = () => {
  const [listImage, setListImage] = useState<any[]>([]);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect(() => {
    setListImage([
      {
        image: Certi1,
        title: "ReactJs Certificate",
        info: "This is a certificate of react js course, a library of front-end web front-end code. I finished it with a perfect score of 10/10",
      },
      {
        image: Certi2,
        title: "Javascript Certificate",
        info: "This is funix's javascript course completion certificate. Through the course, I have a good understanding of javascript as well as additional related knowledge such as jquery, fetch data, data processing...",
      },
      {
        image: Certi3,
        title: "HTML/CSS Certificate",
        info: "This is my first certificate, it is the foundation knowledge that every FE must have. Through this, I also built my first website.",
      },
      {
        image: Certi4,
        title: "DataBase Certificate",
        info: "This is my extra course to supplement my knowledge of databases. Through this I learned more about querying data, using SQL server.",
      },
    ]);
  }, []);
  return (
    <section className="sec-certificate">
      <div className="my-certificate">
        <h4>My Certificate</h4>
        <span>what i have achieved</span>
      </div>
      <div className="cardInfo">
        {listImage &&
          listImage.map((el: any, index) => {
            return (
              <CardCetificate
                key={index}
                image={el.image}
                info={el.info}
                title={el.title}
              />
            );
          })}
      </div>
      <div className="introdule-certi">
      Through what has been achieved. I will try to improve myself further. I am confident about my long-term plan. That is gaining Node Js certification to become a fullstack dev. But the short-term plan is to improve skills and become a more complete front-end dev.
      </div>
    </section>
  );
};

export default Certificate;
