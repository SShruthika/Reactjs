import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
const Home = ()=> {
  // const[isMobile,setisMobile]=useState(false);

  const [name,setUsername]=useState()

  const data=useParams()

   console.log(data);
   console.log(name);

  useEffect(()=>{
    setUsername(data.names)
  },[data.names])

//   const handleToggleMenu=()=>{
//     setisMobile(!isMobile);
//   }

//   const handleMobileMenuClick = () => {
//     setisMobile(!isMobile);
// };
  return (
//     
<div>
  <Navbar/>
{/* <nav className='navbar'> */}
  {/* <h3 className='login'>LOGIN</h3> */}
  {/* <ul className={isMobile ?'nav-links-mob':'nav-links'}> */}
    {/* <li>
      <Link to="/" className='home'>Home</Link>
    </li> */}
    {/* <li>
      <Link to="/About" className='about'>About</Link>
    </li> */}
    {/* <li>
      <Link to="/Contact" className='contact'>Contact</Link>
    </li> */}
    {/* Add more navigation links as needed */}
  {/* </ul> */}
  {/* <button className='mob-menu-icon' onClick={()=>setisMobile()}>{isMobile ?<h1>x</h1>:<h1>=</h1>}</button> */}
{/* </nav> */}

<p className='img'>Welcome {name}</p>
</div>
  )
}
export default Home
