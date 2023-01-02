
import { useEffect, useRef } from 'react';
import { TypeComponent } from '../../component/typeComponent/type';
import './homeStyle.scss';
const Home = () => {
  
  return <section className="sec-home">
    <div className='banner'>
      <h1>Welcome to my website</h1>
      <p className='intro' >Hi! I'm Duong</p>
      <TypeComponent text="I'm front-end developer." className="type-Header"/>
    </div>
  </section>

};

export default Home;

