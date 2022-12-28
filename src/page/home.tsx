import Image from '../image/bgrd.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/material';
const Home = () => {
  return <Box className='homeContainer'>
    <div className='box'>
      <div className='image'>
        <img src={Image} />
      </div>
      <ul className='icon'>
        <li className='icon-Item'><a href=""><FacebookIcon className='link-icon' /></a></li>
        <li className='icon-Item'><a href=""><TwitterIcon className='link-icon' /></a></li>
        <li className='icon-Item'><a href=""><InstagramIcon className='link-icon' /></a></li>
        <li className='icon-Item'><a href=""><YouTubeIcon className='link-icon' /></a></li>
      </ul>
      <div className='detail'>
        <h2 className='info'>To Van Duong </h2>
        <p>Software Engineer</p>
      </div>
    </div>
  </Box>;
};

export default Home;

