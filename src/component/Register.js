
import React from "react";
import { Formik, Form, Field} from "formik";
import "react-phone-number-input/style.css";
import './Register.css';
import comp from '../Assest/comp.jpeg'
import Atss from '../Assest/Atss.jpeg'
import { signupSchema } from "./Registeryup.js";
import { useNavigate } from 'react-router-dom';


const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile:"",
};


const Register = () => {
    
    const navigate =useNavigate()

const hi = (values)=>{
    navigate(`/welcome/${values.name}`);
  }
      
    const onSubmit = (values, actions) => {
        console.log(values);
        
        actions.resetForm();
    
        // console.log("Form Values:", values);
        // console.log("Form Errors:", actions.errors);
        // console.log("Touched Fields:", actions.touched);
        // ... rest of the code
    };

    return (

        <div className='container'>
        <div className="col-1">
              <img src={comp} alt="Register" />

          </div>

            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}>
                {({ errors, touched }) => (

                    <Form className='signup_form'>
                        <div className='col-2'>
             <div align='center'>

              {/* <div> */}
                  <div className='img'><img src={Atss} alt="Atss"/></div></div>
                  {/* <br/> */}
                  {/* </div> */}
                  {/* <div> */}
                  <h2 align="center">Register</h2>
                  {/* </div> */}
        <div className='app'></div>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name' />
                        <div className='error_container'>
                            {errors.name && touched.name && (
                                <p className='form_error'>{errors.name}</p>
                            )}
                        </div>

                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <div className='error_container'>
                            {errors.email && touched.email && (
                                <p className='form_error'>{errors.email}</p>
                            )}
                        </div>

                        <label htmlFor='password'>Password</label>
                        <Field type='password' name='password' />
                        <div className='error_container'>
                            {errors.password && touched.password && (
                                <p className='form_error'>{errors.password}</p>
                            )}
                        </div>

                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type='password' name='cpassword' />
                        <div className='error_container'>
                            {errors.cpassword && touched.cpassword && (
                                <p className='form_error'>{errors.cpassword}</p>
                            )}
                        </div>

                        <label htmlFor='mobile'>Mobile Number</label>
                        <Field type='tel' name='mobile'/>
                        <div className='error_container'>
                            {errors.mobile && touched.mobile && (
                                <p className='form_error'>{errors.mobile}</p>
                            )}
                        </div>

                        <button onClick={hi} type='submit'>Register</button> </div>
                    </Form>
                )}
                
            </Formik>
        {/* // </div> */}
        </div>
        
    );
}

export default Register;

