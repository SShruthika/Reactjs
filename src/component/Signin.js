// import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link,FormControlLabel ,Checkbox} from '@mui/material'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './login.css';

const Signin = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '95vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        mobile:'',
        remember: false
       
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid name').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    const hello = ()=>{
        alert("welcome  "  )
      }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
                    <Avatar style={avatarStyle}>S</Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Field as={TextField} label='Mobile Number' name="mobile"
                                placeholder='Enter mobile number' fullWidth required
                                helperText={<ErrorMessage name="mobile" />} />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} onClick={hello} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}
                                </Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>


                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signin
