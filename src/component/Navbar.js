// import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
const Navbar = () => {
    const[isMobile,setisMobile]=useState(false);

    // const history = useHistory();
    const navigate = useNavigate();

    const handleToggleMenu=()=>{
        setisMobile(!isMobile);
      }
    
      const handleMobileMenuClick = () => {
        setisMobile(!isMobile);
    };

    const handlePreviousPage = () => {
      navigate(-1); // This will navigate to the previous page
    };
  
    const handleLogin =()=>{
      navigate(`/`)
    }
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
    <li>
    <Link  className='previous' onClick={handlePreviousPage}>Previous</Link>   
    </li>
    {/* <button className='previous-page-button' onClick={handlePreviousPage}>
          Previous
        </button> */}
    {/* Add more navigation links as needed */}
    <button onClick={handleLogin}>Login</button>
  </ul>
  <button className='mob-menu-icon' onClick={handleToggleMenu}>
    {isMobile ? <h1>x</h1> : <h1>=</h1>}
  </button>
 
</nav>
      
    </div>
  )
}

export default Navbar
