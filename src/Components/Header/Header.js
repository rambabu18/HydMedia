import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css';


function Header(){
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = ()=> setClick(!click)
  const closeMobileMenu =() => setClick(false);

  const showButton = ()=>{
    if(window.innerWidth<=960){
      setButton(false)
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize',showButton)

  return(
    <>
    <nav className='navbar'>
      <div className='navbar-container'>

      <Link to='/' className='navbar-logo' >
        HYDM <i className='fab fa-typo3' />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item' >
          <Link to='/' className='nav-links' onClick={closeMobileMenu} >Our Product</Link>
      </li>
      <li className='nav-item' > 
          <Link to='/AboutCompany' className='nav-links' onClick={closeMobileMenu} >About Company</Link>
      </li>
      <li className='nav-item' >
          <Link to='/CaseStudy' className='nav-links' onClick={closeMobileMenu} >Case Study</Link>
      </li>
      <li className='nav-item' >
          <Link to='/Contact' className='nav-links' onClick={closeMobileMenu} >Contact</Link>
      </li>
      </ul>
      </div>
    </nav>
    </>
  )
}
export default Header