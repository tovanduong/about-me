import React, { useEffect, useState } from "react";
import CardCetificate from "./component/card";
import "./cerificateStyle.scss";
import Certi1 from "../../image/certi1.PNG";
import Certi2 from "../../image/certi2.PNG";
import Certi3 from "../../image/certi3.PNG";
import Certi4 from "../../image/certi4.PNG";
const Certificate = () => {
  const [listImage, setListImage] = useState<any[]>([]);
  useEffect(() => {
    setListImage([
      {
        image: Certi1,
        title: "ReactJs Certificate",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio, atque soluta fugiat veritatis inventore sequi doloremque laboriosam. Eius numquam non sit ipsa dignissimos porro, corporis at sed quisquam blanditiis?",
      },
      {
        image: Certi2,
        title: "Javascript Certificate",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio, atque soluta fugiat veritatis inventore sequi doloremque laboriosam. Eius numquam non sit ipsa dignissimos porro, corporis at sed quisquam blanditiis?",
      },
      {
        image: Certi3,
        title: "HTML/CSS Certificate",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio, atque soluta fugiat veritatis inventore sequi doloremque laboriosam. Eius numquam non sit ipsa dignissimos porro, corporis at sed quisquam blanditiis?",
      },
      {
        image: Certi4,
        title: "DataBase Certificate",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio, atque soluta fugiat veritatis inventore sequi doloremque laboriosam. Eius numquam non sit ipsa dignissimos porro, corporis at sed quisquam blanditiis?",
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
          listImage.map((el: any) => {
            return (
              <CardCetificate
                image={el.image}
                info={el.info}
                title={el.title}
              />
            );
          })}
      </div>
      <div className="introdule-certi">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
        ducimus nisi, vitae suscipit neque ex officia nesciunt incidunt, quis
        animi doloribus asperiores dolores fuga iste? Possimus nostrum ex at
        ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        facere debitis tenetur minus amet quod, est totam dolore sapiente
        deserunt expedita quas illo dolorem ipsam rerum aliquam consectetur odit
        maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione, ducimus nisi, vitae suscipit neque ex officia nesciunt
        incidunt, quis animi doloribus asperiores dolores fuga iste? Possimus
        nostrum ex at ullam? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iure facere debitis tenetur minus amet quod, est totam dolore
        sapiente deserunt expedita quas illo dolorem ipsam rerum aliquam
        consectetur odit maxime.
      </div>
    </section>
  );
};

export default Certificate;
