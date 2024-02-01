import React from 'react'
import com from '../Assest/com.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';
import './Form.css'
import { Avatar } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from 'axios';


const phoneRegex=/^[0-9]{10}$/;
const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmpwd: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords not match'),
    // mobile: Yup.number().required('Mobile number is required').max(10, 'Max Length Exceeded'),
    mobile: Yup.string().matches(phoneRegex,"Please enter a valid mobile number.").required("Please enter your mobile number."),
  });


function Form() {
    const avatarStyle={backgroundColor:"black"}

    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          confirmpwd: '',
          mobile: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
          try {
          
            const response = await axios.post('https://6593e3c01493b01160696195.mockapi.io/emploee', values);
            console.log(response.data); 
          } catch (error) {
            console.error('Error during registration:', error);
          }
        
          console.log(values);
        },
      });
    
  return (
    
    <section>
        {/* <div>
        <Avatar style={avatarStyle}><HowToRegIcon/></Avatar>
        </div> */}
        
        <div className="register">
            <div className="col-1">
            <div align="center">
        <Avatar style={avatarStyle}><HowToRegIcon/></Avatar>
        </div>
        <div align="center">
            ATS
        </div>
                <h2 className='head'>Register</h2>
                {/* <span>register and enjoy the service</span> */}
                
                <form id='form' className='flex flex-col' onSubmit={formik.handleSubmit}>
                  
                    <input type="text" {...formik.getFieldProps("username")} placeholder='username' />
                    

                    {formik.touched.username && formik.errors.username && (
              <div>{formik.errors.username}</div>
            )}
           

                    <input type="Password" {...formik.getFieldProps("password")} placeholder='password' />
                
                   
                    {formik.touched.password && formik.errors.password && (
              <div>{formik.errors.password}</div>
            )}
           

                    <input type="password" {...formik.getFieldProps("confirmpwd")} placeholder='confirm password' />
                    
                    
                    {formik.touched.confirmpwd && formik.errors.confirmpwd && (
              <div>{formik.errors.confirmpwd}</div>
            )}
           

                    <input type="tel" {...formik.getFieldProps("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                 
                    {formik.touched.mobile && formik.errors.mobile && (
                      <div>{formik.errors.mobile}
                       </div>  
            )}
                     {/* {errors.mobile?.type === "required" && "Mobile Number is required"} */}
                    {/* {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
                    <button type="submit"className='btn'>Register</button>
                </form>

            </div>
            <div className="col-2">
                <img src={com} alt="Register" />

            </div>
        </div>
    </section>
  )
}
export default Form;