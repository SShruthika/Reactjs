import React from 'react'
// import logo from "./Assest/logo.png"
import logo from "../../Assest/logo.png"

const Header = () => {
  return (
    <div>
      <header>
        {/* desktop */}
        <div className=''>
            <div className=''>
              <img src={logo} />
                {/* <img src='C:\Users\SightSpectrum\Desktop\html\video.html\REACT\myapp\src\Assest\logo.png' alt='logo'/> */}
                {/* <img src='C:\Users\SightSpectrum\Desktop\html\video.html\REACT\myapp\src\Assest\toy.jpg' alt='toy'/> */}
                <img src={logo} alt="logo"/>

            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
