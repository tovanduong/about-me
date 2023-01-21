import { useEffect } from "react";
import { TypeComponent } from "../../component/header/typeComponent/type";
import "./homeStyle.scss";
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section className="sec-home">
      <div className="banner">
        <h1>Welcome to my website</h1>
        <p className="intro">Hi! I'm Duong</p>
        <TypeComponent
          text="I'm front-end developer."
          className="type-Header"
        />
      </div>
    </section>
  );
};

export default Home;
