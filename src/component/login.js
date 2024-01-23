import {Avatar, Button, FormControlLabel, Grid, Paper, TextField, Typography ,Link, Checkbox} from '@mui/material'
    //  import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import './login.css';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const paperStyle={ padding :20,height:'100vh',width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:"green"}
  const btnstyle={margin:'8px 0', backgroundColor:"black" ,color:"white"}
  
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

       const navigate =useNavigate()

  const handleUsernameChange =(event)=>{
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
    
  };
  const hello = ()=>{
    // alert("welcome  " + username)
    navigate(`/Home/${username}`)
  }
  const goToSignUpPage = () => {
    // Use the navigate function to go to the signup page
    navigate('/Signup');
  };
  
  return (

       <Grid className='ss'>
          <Paper id="pap" elevation={10} style={paperStyle}>
            
             <Grid align='center'>

              <div>
                  <Avatar style={avatarStyle}>S</Avatar></div>
                  <br/>
                  <div>
                  <h1>SIGN IN</h1>
                  </div>
                  <br/>
             </Grid>
                 <div>
                  <TextField label='username'placeholder='enter your name' value={username} onChange={handleUsernameChange}  fullwidth required style={{margin:10,width:"220px"}}></TextField> 
                  </div> <br/>
                  <div>
                  <TextField label='password' placeholder='enter your password' type='password' value={password} onChange={handlePasswordChange} fullwidth required style={{margin:10 ,width:"220px",height:""}}></TextField>
                  </div>
                  <br/>
                  
                  {/* <FormControlLabel control={<CheckBox defaultChecked />} label="Remember me" /> */}
                  <div>
           
              </div>
              <FormControlLabel
              control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
              }
              label="remember me"
              />
              <br></br>
              <div>
             <Button type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth onClick={hello}>SIGN IN</Button>
             </div>
             <br></br>
             <div>
            <Typography> 
              <Link href="#">
               Forgot Password ?
              </Link>
            </Typography>
            </div>
            <br></br>
            <div>
            <Typography> Do you have an account ?
              <Link onClick={goToSignUpPage}>
               sign up
              </Link>
            </Typography>
            </div>
            <br></br>
         
         </Paper>
      </Grid>
     
  )
}
export default Login
