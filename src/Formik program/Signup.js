// import React from "react";
// import { Formik, Form, Field} from "formik";
// import './Sign.css'
// import { signupSchema } from "./Yup";

// const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//     mobile:""

// };

// const Signup = () => {
//     const onSubmit = (values, actions) => {
//         console.log(values);
//         actions.resetForm();
//     };

//     return (
//         <div className='app'>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={signupSchema}
//                 onSubmit={onSubmit}>
//                 {({ errors, touched }) => (
//                     <Form className='signup_form'>
//                         <label htmlFor='name'>Name</label>
//                         <Field type='text' name='name' />
//                         <div className='error_container'>
//                             {errors.name && touched.name && (
//                                 <p className='form_error'>{errors.name}</p>
//                             )}
//                         </div>

//                         <label htmlFor='email'>Email</label>
//                         <Field type='email' name='email' />
//                         <div className='error_container'>
//                             {errors.email && touched.email && (
//                                 <p className='form_error'>{errors.email}</p>
//                             )}
//                         </div>

//                         <label htmlFor='password'>Password</label>
//                         <Field type='password' name='password' />
//                         <div className='error_container'>
//                             {errors.password && touched.password && (
//                                 <p className='form_error'>{errors.password}</p>
//                             )}
//                         </div>

//                         <label htmlFor='cpassword'>Confirm Password</label>
//                         <Field type='password' name='cpassword' />
//                         <div className='error_container'>
//                             {errors.cpassword && touched.cpassword && (
//                                 <p className='form_error'>{errors.cpassword}</p>
//                             )}
//                         </div>

//                         <label htmlFor='mobile'>Mobile Number</label>
//                         <Field type='tel' name='mobile'/>
//                         <div className='error_container'>
//                             {errors.mobile && touched.mobile && (
//                                 <p className='form_error'>{errors.mobile}</p>
//                             )}
//                         </div>
//                         <button type='submit'>Submit</button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default Signup


import React from "react";
import { Formik, Form, Field} from "formik";
// import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import './Sign.css'
import { signupSchema } from "./Yup";
// import Navbar from "../component/Navbar";
// import { useNavigate } from 'react-router-dom';

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile:"",
    // country:""
};
// function handleSubmit(e) {
//     e.preventDefault();
//     // rest of the code
// }
// ...
const Signup = () => {
    
    // const navigate =useNavigate()
     
    // const hellos = ()=>{
    //     // alert("welcome  " + username)
    //     // navigate(`/Home/${username}`)

    //     navigate(`/Home/`)
    //   }
    
    //   const helloss = ()=>{
    //     navigate(`/Navbar/`)
    //   }
      
    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    
        // console.log("Form Values:", values);
        // console.log("Form Errors:", actions.errors);
        // console.log("Touched Fields:", actions.touched);
        // ... rest of the code
    };

    return (

        <div className='app'>
          
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className='signup_form'>
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

                        {/* <label htmlFor='mobile'>Mobile Number</label>
                        <Field name='mobile'>
                            {({ field, form }) => (
                                <PhoneInput
                                    {...field}
                                    placeholder="Enter phone number"
                                    defaultCountry="IN"
                                    onBlur={() => form.setFieldTouched('mobile')}
                                />
                            )}
                        </Field>
                        <div className='error_container'>
                            <ErrorMessage name="mobile" component="p" className='form_error' />
                        </div> */}

                        <button  type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
          
        </div>
    );
}

export default Signup