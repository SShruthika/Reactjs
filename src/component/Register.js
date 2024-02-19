
// import React from "react";
// import { Formik, Form, Field} from "formik";
// import "react-phone-number-input/style.css";
// import './Register.css';
// import comp from '../Assest/comp.jpeg'
// import Atss from '../Assest/Atss.jpeg'
// import { signupSchema } from "./Registeryup.js";
// // import { useNavigate } from 'react-router-dom';


// const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//     mobile:"",
// };


// const Register = () => {
    
//     // const navigate =useNavigate()

// // const hi = (values)=>{
// //     navigate(`/welcome/${values.name}`);
// //   }
      
//     const onSubmit = (values, actions) => {
//         console.log(values);
        
//         actions.resetForm();
    
//         // console.log("Form Values:", values);
//         // console.log("Form Errors:", actions.errors);
//         // console.log("Touched Fields:", actions.touched);
//         // ... rest of the code
//     };

//     return (

//         <div className='container'>
//         <div className="col-1">
//               <img src={comp} alt="Register" />

//           </div>

//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={signupSchema}
//                 onSubmit={onSubmit}>
//                 {({ errors, touched }) => (

//                     <Form className='signup_form'>
//                         <div className='col-2'>
//              <div align='center'>

//               {/* <div> */}
//                   <div className='img'><img src={Atss} alt="Atss"/></div></div>
//                   {/* <br/> */}
//                   {/* </div> */}
//                   {/* <div> */}
//                   <h2 align="center">Register</h2>
//                   {/* </div> */}
//         <div className='app'></div>
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

//                         <button  type='submit'>Register</button> </div>
//                     </Form>
//                 )}
                
//             </Formik>
//         {/* // </div> */}
//         </div>
        
//     );
// }

// export default Register;


import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios"; // Import axios for making HTTP requests
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
    mobile: "",
};

const Register = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        try {
            // Make an API call to register the user
            const response = await axios.post("https://6593e3c01493b01160696195.mockapi.io/emploee", values);
            console.log("API Response:", response.data);

            // // Optionally, you can check for success and handle accordingly
            // if (response.data.success) {
            //     // If registration is successful, navigate to the login page
            //     navigate('/login');
            // } else {
            //     // Handle registration failure
            //     console.error("Registration failed:", response.data.message);
            // }
            // Inside the onSubmit function in Register.js
if (response.data.success) {
    // If registration is successful, navigate to the login page
    // navigate(`/login?email=${values.email}&password=${values.password}`);
    localStorage.setItem('registeredUser', JSON.stringify({ email: values.email, password: values.password }));
    navigate('/login');
} else {
    // Handle registration failure
    console.error("Registration failed:", response.data.message);
}
        } catch (error) {
            console.error("API Error:", error);
            // Handle API request error
        }

        actions.resetForm();
    };

    return (
        <div className='container'>
        <div className="col-1">
               <img src={comp} alt="Register" />
           </div>
            
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}
            >
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

    <button  type='submit'>Register</button> </div>
</Form>
)}
                {/* ... (rest of your code) ... */}
            </Formik>
            {/* ... (rest of your code) ... */}
        </div>
    );
}

export default Register;


