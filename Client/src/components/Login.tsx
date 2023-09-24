import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import axios from '../utils/axios'
import validationSchema from './validation/Loginvalidation';
import { useDispatch } from "react-redux";
import {login}from '../../src/redux/reducer/userSlice.ts'



interface FormValues {
    name: string;
    email: string;
    phone: string;


}

function Login() {


    const navigate = useNavigate();
    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''




        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {




            const body = {

                name: values.name,
                email: values.email,
                phone:values.phone,


            };
            console.log(body);
            

            axios.post("/login", body).then((response) => {
                console.log(response);
                


                if (response.data.status == true) {

                    localStorage.setItem('access_token_user', response.data.AccessToken)
                    dispatch(login({id:response.data.isUser.userId,email:response.data.isUser.userName,name:response.data.isUser.userEmail,phone:response.data.isUser.userphone,access_token:response.data.AccessToken,times:response.data.isUser.usertime,message:response.data.isUser.usermessage}))

                    navigate("/home")

                } else {
                    console.error(response);
                   


                }


            }).catch((response) => {
                console.error(response.message);

                navigate("/")

            })

        },

    });

    return (
        <Container component="main" maxWidth="md"   >
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350, marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500, color: "blue", marginBottom: 4 }}>
                    Welcome back!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
                    Member login
                </Typography>

                <Divider >Or Continue with</Divider>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 20 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: "70%" }}
                    />
                    <TextField
                        margin="normal"
                        required-
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ width: "70%" }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="phone"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        sx={{ width: "70%" }}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, width: "70%", backgroundColor: '#131392' }}  >
                        Login
                    </Button>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 350,
                    maxHeight: { xs: 250, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
            />
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}

        </Container>
    )
}

export default Login