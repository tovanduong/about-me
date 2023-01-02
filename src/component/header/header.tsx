import "./header.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [sticky, setSticky] = useState<string>('')
  const [openMenu, setOpenMenu] = useState<string>('open')
  let location= useLocation()
  useEffect(()=>{
    
    const handleScroll = (e:any) =>{
      if(window.scrollY > 0) {
        setSticky('stick')
      }else {
        setSticky('')
      }
    }
    window.addEventListener('scroll',handleScroll)

    return ()=> {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  useEffect(()=>{
    if(location.pathname !== '/'){
      setSticky('stick')
    }else {
      setSticky('')
    }
  },[location.pathname ])

  const handleOpenMenu = ()=>{
    if(openMenu==='close') {
      setOpenMenu('open')
    }else {
      setOpenMenu('close')
    }
  }

  const handleClose = (e:any)=>{
    setOpenMenu('open')
  }
  return (
    <header className={`header ${sticky} ${openMenu}`}>
      <div className={`container `}>
        <div className='Logo'>Mr Duong</div>
        <ul className="header-list">
          <li className='header-item'><NavLink onClick={handleClose} to='/'>Home</NavLink></li>
          <li className='header-item'><NavLink onClick={handleClose} to='/about'>About me</NavLink></li>
          <li className='header-item'><NavLink onClick={handleClose} to='/certificate'>Certificate</NavLink></li>
          <li className='header-item'><NavLink onClick={handleClose} to='/skill'>My Skill</NavLink></li>
          <li className='header-item'><NavLink onClick={handleClose} to='/contact'>Contact me</NavLink></li>
        </ul>
        <div className="menu-icon" onClick={handleOpenMenu}>{openMenu==='open'?<MenuIcon/>:<CloseIcon/>}</div>
      </div>
    </header>
  );
};

export default Header;
