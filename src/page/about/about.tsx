
import './aboutStyle.scss'
import CardInfo from './cardInfo/cardInfo';
const About = () => {
  return <section className='sec-about'>
    <div className='about-me'>
      <h4>About Me</h4>
      <span>Who am I</span>
    </div>
    <div className='cardInfo'>
      <CardInfo />
      <div className='about-info'>
      <div className='info-text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus voluptatum ex, illo earum quam! Reiciendis, porro perspiciatis officiis distinctio optio vero eveniet deserunt, veritatis aut ipsa consectetur modi soluta?
      </div>
      <button className='info-button'>Download my cv</button>
      </div>

    </div>

  </section>;
};

export default About;
