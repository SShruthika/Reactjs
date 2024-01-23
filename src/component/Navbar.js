// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const[isMobile,setisMobile]=useState(false);
    const handleToggleMenu=()=>{
        setisMobile(!isMobile);
      }
    
      const handleMobileMenuClick = () => {
        setisMobile(!isMobile);
    };

  return (
    <div>
        <nav className='navbar'>
  <h3 className='login'>PLANT</h3>
  
  <ul className={isMobile ?  'nav-links-mob' : 'nav-links'}  onClick={handleMobileMenuClick}>
  
    <li>
      <Link to="/Homes" className='home'>Home</Link>
    </li>
    <li>
      <Link to="/About" className='about'>About</Link>
    </li>
    <li>
      <Link to="/Contact" className='contact'>Contact</Link>
    </li>
    {/* Add more navigation links as needed */}
  </ul>
  <button className='mob-menu-icon' onClick={handleToggleMenu}>
    {isMobile ? <h1>x</h1> : <h1>=</h1>}
  </button>
</nav>
      
    </div>
  )
}

export default Navbar



