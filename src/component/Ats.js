import React from 'react'
import {Button, Typography ,Link} from '@mui/material'
import './Ats.css';
import comp from '../Assest/comp.jpeg'
import Atss from '../Assest/Atss.jpeg'
import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios"; // Import axios for making HTTP requests

const Ats = () => {
  const btnstyle={margin:'8px 0',color:"white"}
  
  const [email, setemail]= useState('');
  const [password, setPassword]= useState('');

       const navigate =useNavigate()

      //  const location = useLocation();

       
  // useEffect(() => {
  //   // Retrieve email and password from URL parameters
  //   const searchParams = new URLSearchParams(location.search);
  //   const emailParam = searchParams.get('email');
  //   const passwordParam = searchParams.get('password');

  //   // Set the state with retrieved values
  //   setemail(emailParam || '');
  //   setPassword(passwordParam || '');
  // }, [location.search]);



//   useEffect(() => {
//     // Retrieve registered user credentials from localStorage
//     const storedUser = localStorage.getItem('registeredUser');

//     if (storedUser) {
//         const { email, password } = JSON.parse(storedUser);
//         setemail(email || '');
//         setPassword(password || '');
//     }
// }, []);

const onSubmit = async () => {
  try {
      // Make an API call to your backend for user authentication
      const response = await axios.get("https://6593e3c01493b01160696195.mockapi.io/emploee", { 
        params:{email, password },
      });

      if (response.data.success) {
          // Handle successful login
          navigate(`/welcome/${response.data.user.name}`);
      } else {
          // Handle login failure
          console.error("Login failed:", response.data.message);
      }
  } catch (error) {
      console.error("API Error:", error);
      // Handle API request error
  }
};


  const handleEmailChange =(event)=>{
    setemail(event.target.value);
  };
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  };
  
  const hii = () => {
    // console.log(valuse);
    navigate('/Register');
    // console.log('Email:', email);
    // console.log('Password:', password);

  }
  
  const hiii = (values) => {
   navigate(`/welcome/${values.name}`);

  }
 
  useEffect(() => {
    console.log('Email:', email);
    console.log('Password:', password);
  }, [email, password]);

  return (

       <div className='container'>
          <div className="col-1">
                <img src={comp} alt="Register" />

            </div>
            
        <div className='col-2'>
             <div align='center'>

              <div>
                  <div className='img'><img src={Atss} alt="Atss"/></div></div>
                  <br/>
                  <div>
                  <h2>Login</h2>
                  </div>
                
             </div>
        
                 {/* <div className='email'> */}
                  <label>
                    <input type='email' name="email"placeholder='enter your mail id' value={email} onChange={handleEmailChange}  required style={{margin:10,width:"300px",padding:'8px'}}/> 
                  </label>
                  {/* </div>  */}
                  <div align="center">
                  <label>
                    <input type='password' name='password' placeholder='enter your password'  value={password} onChange={handlePasswordChange} fullwidth required style={{margin:10 ,width:"300px",padding:'8px'}}/>
                  </label>
                  </div>
                 

              <div>
                <Typography> 
              <Link href="#" underline='none' style={{textAlign:'left',marginLeft:"215px"}}>
               Reset password
              </Link>
            </Typography>
            </div>
            <br></br> 
              <div>
             <Button onClick={onsubmit} onSubmit={onSubmit} className='btn'  type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth>Log in</Button>
             </div>

            <div>
            <Typography> 
              {/* <Link href='#' underline='none'style={{textAlign:'left',marginLeft:"280px"}}>
               register
              </Link> */}
              <Link to='/Register' onClick={hii} underline="none" style={{ textAlign: 'left', marginLeft: "280px" }}>
  register
</Link>
            </Typography>
            </div>
            <br></br>
         
         {/* </Paper> */}
         </div>
      </div>
  
     
  )
}
export default Ats
