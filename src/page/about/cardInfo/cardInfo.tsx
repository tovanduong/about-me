
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from '../../../image/duong.jpg';

const CardInfo = () => {
  return (
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
  )
}

export default CardInfo