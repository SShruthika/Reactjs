import React from 'react'
import {Button, Typography ,Link} from '@mui/material'
import './Ats.css';
import comp from '../Assest/comp.jpeg'
import Atss from '../Assest/Atss.jpeg'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Ats = () => {
  const btnstyle={margin:'8px 0',color:"white"}
  
  const [email, setemail]= useState('');
  const [password, setPassword]= useState('');

       const navigate =useNavigate()

  const handleEmailChange =(event)=>{
    setemail(event.target.value);
  };
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  };
  
  const hii = () => {
    // console.log(valuse);
    navigate('/Register');
    console.log('Email:', email);
    console.log('Password:', password);

  }
  
  // const hiii = (values) => {
  //  navigate(`/welcome/${values.name}`);

  // }
 
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
             <Button  className='btn'  type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth>Log in</Button>
             </div>

            <div>
            <Typography> 
              {/* <Link href='#' underline='none'style={{textAlign:'left',marginLeft:"280px"}}>
               register
              </Link> */}
              <Link to='/Register' onClick={hii} underline="none"style={{ textAlign: 'left', marginLeft: "280px" }}>
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
